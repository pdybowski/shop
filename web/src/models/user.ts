export interface User {
    email?: string | undefined;
    firstName?: string;
    lastName?: string;
    password?: string;
    role?: 'user' | 'admin';
}
