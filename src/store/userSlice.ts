import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CurrentUserResponse } from '../types/user';

interface UserState {
    user_id: string | null;
    first_name: string | null;
    last_name: string | null;
    classe_id?: string | null;
    email?: string | null;
}

const initialState: UserState = {
    user_id: null,
    first_name: null,
    last_name: null,
    classe_id: null,
}

export const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers: {
            setUser: (state, action: PayloadAction<Partial<CurrentUserResponse>>) => {
                state.user_id = action.payload.id ?? null;
                state.first_name = action.payload.first_name ?? null;
                state.last_name = action.payload.last_name ?? null;
                state.classe_id = action.payload.classe_id ?? null;
                state.email = action.payload.email ?? null;
            },
            updateUserName: (state, action: PayloadAction<{ first_name: string; last_name: string }>) => {
                state.first_name = action.payload.first_name;
                state.last_name = action.payload.last_name;
            },
            clearUser: (state) => {
                state.user_id = null;
                state.first_name = null;
                state.last_name = null;
                state.classe_id = null;
                state.email = null;
            }
        }
    }
)
export const { setUser, updateUserName, clearUser } = userSlice.actions;
export default userSlice.reducer;