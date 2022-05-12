export class User {
    email: string = '';
    firstName: string = '';
    lastName: string = '';
    password: string = '';
    role?: string = UserRole.user;
}

enum UserRole {
    user = 'user',
}
