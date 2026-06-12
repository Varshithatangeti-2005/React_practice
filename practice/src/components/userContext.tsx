import { createContext } from "react";

interface userContextType{
    username:string;
}

export const UserContext=createContext<userContextType>({
    username:"",
})