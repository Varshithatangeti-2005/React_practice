import { createContext } from "react";

export interface StudentData {
  name: string;
  roll_no: number;
}

export const StudentContext = createContext<any>(null);