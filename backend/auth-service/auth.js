import { createClient } from '@supabase/supabase-js';

//Replace with Supabase URL and anon key
const supabase = createClient(
    'https://URL', 'ANON_KEY'
)

export const signup = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({
        email, 
        password
    });
    if (error) {
        throw new Error(error.message);
    }
    return user;
}

export const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email, 
        password
    });
    if (error) {
        throw new Error(error.message);
    }
    if (!data.user || !data.session) {
        throw new Error('Login failed, no user or session returned');
    }
    return { user: data.user, token: data.session.access_token };
}
