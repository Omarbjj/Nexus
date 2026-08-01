import { supabase } from "../lib/supabase";

export async function actualizarPuntaje(
    userId: number,
    puntos: number
) {

    const { data: usuario, error } = await supabase
        .from("users")
        .select("puntaje")
        .eq("id", userId)
        .single();

    if (error) throw error;

    const { error: updateError } = await supabase
        .from("users")
        .update({
            puntaje: usuario.puntaje + puntos
        })
        .eq("id", userId);

    if (updateError) throw updateError;

}