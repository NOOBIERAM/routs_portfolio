export type userRole = "ADMIN" | "STUDENT" | "TEACHER"
export type userStatus = "APPROVED" | "PENDING" | "REJECTED"
export interface User {
    id: string;
    email: string;  
    first_name: string;
    last_name: string;
    role?: userRole 
    status?: userStatus
    created_at?: string;
    updated_at?: string;
    classe_id?: string | null 
}

export type CurrentUserResponse = Omit<User, "created_at" | "updated_at">
export type AuthRegisterPayload = Partial <Pick<User,"first_name" | "last_name" | "role" | "classe_id">>
export type AuthLoginPayload = Partial <Pick<User, "email">> & { password: string}
export type AuthLoginResponse = Pick<User, "id"> & {
    access_token: string
    refresh_token: string
}
export type UserGetResponse = Omit<User, "created_at" | "updated_at" | "classe_id">
export type UserUpdatePayload = Partial<Pick<User, "first_name" | "last_name" | "classe_id" | "updated_at"> & { password: string | null}>
export type UserUpdateResponse = Pick<User, "id" | "first_name" | "last_name" | "classe_id">

export type UserDetail = Omit<User, "created_at" | "updated_at" | "role" | "status" >
