import { supabase } from "../lib/supabase";
import type { UserForm } from "../types/User";

export async function createUser(user: UserForm) {

    const { data: authData, error: authError } =
        await supabase.auth.signUp({
            email: user.email,
            password: user.password,
        });

    if (authError) {
        throw authError;
    }

    if (!authData.user) {
        throw new Error("No se pudo crear el usuario en Auth");
    }

    const { data, error } = await supabase
        .from("users")
        .insert({
            auth_id: authData.user.id,
            tipo_documento_id: user.tipo_documento_id,
            numero_documento: user.numero_documento,
            nombres: user.nombres,
            apellidos: user.apellidos,
            rol_id: user.rol_id,
            puntaje: 0
        })
        .select();

    if (error) {
        throw error;
    }

    return data;
}

export async function getCurrentUser() {

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
        throw authError;
    }

    if (!user) {
        throw new Error("No existe un usuario autenticado.");
    }

    const { data, error } = await supabase
        .from("users")
        .select(`
            *,
            roles (
                id,
                nombre
            )
        `)
        .eq("auth_id", user.id)
        .single();

    if (error) {
        throw error;
    }

    return data;
}

export async function getLideres() {

    const { data, error } = await supabase
        .from("users")
        .select(`
            id,
            nombres,
            apellidos
        `)
        .eq("rol_id", 2)
        .order("nombres");

    if (error) {
        throw error;
    }

    return data;

}