export class User {
    email: string = '';
    firstName: string = '';
    lastName: string = '';
    password: string = '';
    role?: string = UserRole.USER;
    token?: any = '';
}

enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
}
