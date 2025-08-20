export let users: User[] = [
    {
    "id": "62806267-5489-49d6-9a47-fcd302eea790",
    "username": "nalendra",
    "password": "abcd",
    "role": "security"
    }
]

export type UserRole = ADMIN | SECURITY

export type ADMIN = 'admin'

export type SECURITY = 'security'

export interface User {
    id : string,
    username : string,
    role:UserRole,
    password: string,
}