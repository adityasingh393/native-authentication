export interface User {
    email: string;
    name: string;
    phone: string;
    password: string;
}
export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}