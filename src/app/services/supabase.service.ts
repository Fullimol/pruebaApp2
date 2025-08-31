import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

// Definimos un modelo simple para el perfil
export interface Perfil {
    id: string;
    email: string;
    nombre?: string;
    created_at?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {
    private supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

    // =====================
    // 🔐 AUTH
    // =====================

    // Registrar un usuario en Supabase Auth
    async signUp({ email, password }: { email: string; password: string }) {
        const { data, error } = await this.supabase.auth.signUp({ email, password });
        if (error) throw error;

        const user = data.user;
        if (!user) throw new Error('No se pudo crear el usuario.');

        // Guardamos datos en la tabla profiles (sin contraseña)
        const { error: insertError } = await this.supabase
            .from('profiles')
            .insert({
                id: user.id,
                email
            });

        if (insertError) {
            // Si falla la inserción, hacemos logout para no dejar usuario inconsistente
            await this.supabase.auth.signOut();
            throw insertError;
        }

        return { user, session: data.session }; // 👈 así devolvés ambos si querés
    }


    // Iniciar sesión
    async signIn({ email, password }: { email: string; password: string }) {
        const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return { user: data.user, session: data.session }; // opcional: devolver ambos
    }


    // Cerrar sesión
    async signOut() {
        const { error } = await this.supabase.auth.signOut();
        if (error) throw error;
    }

    // Usuario actual
    async getUser() {
        const { data, error } = await this.supabase.auth.getUser();
        if (error) throw error;
        return data.user;
    }

    // =====================
    // 👤 PROFILES
    // =====================

    // Obtener mi perfil desde la tabla profiles
    async getMyProfile(): Promise<Perfil | null> {
        const { data: userRes, error: userError } = await this.supabase.auth.getUser();
        if (userError) throw userError;
        const uid = userRes.user?.id;
        if (!uid) return null;

        const { data, error } = await this.supabase
            .from('profiles')
            .select('*')
            .eq('id', uid)
            .single();

        if (error) throw error;
        return data as Perfil;
    }

    // Actualizar datos de mi perfil
    async updateProfile(perfil: Partial<Perfil>) {
        const { data: userRes } = await this.supabase.auth.getUser();
        const uid = userRes.user?.id;
        if (!uid) throw new Error('Usuario no logueado');

        const { data, error } = await this.supabase
            .from('profiles')
            .update(perfil)
            .eq('id', uid)
            .select()
            .single();

        if (error) throw error;
        return data as Perfil;
    }
}
