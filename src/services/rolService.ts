import { supabase } from "../lib/supabase";

export async function getRoles() {

    const { data, error } = await supabase
        .from("roles")
        .select("*")
        .order("id");

    if (error) {
        throw error;
    }

    return data;

}