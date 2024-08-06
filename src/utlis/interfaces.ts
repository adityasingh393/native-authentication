import { StackScreenProps } from '@react-navigation/stack';

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

export type AuthStackParamList = {
    Signup: undefined;
    Login: undefined;
};

export type AppStackParamList = {
    Home: undefined;
};

export type SignupScreenProps = StackScreenProps<AuthStackParamList, 'Signup'>;
export type LoginScreenProps = StackScreenProps<AuthStackParamList, 'Login' >;
export type HomeScreenProps = StackScreenProps<AppStackParamList, 'Home'>;
