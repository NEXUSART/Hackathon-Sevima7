import { User, users } from "../models/user";

export const findUser = (username:string) => {
    
    const user = users.find(x => x.username === username)
    
    return user; 
}

export const createUser = (user:User) => {
    return users.push(user);
}