import { Employee } from "./Employee";

export interface EmployeeRepo {
    findEmployeesBornOn(day: number, month: number): Employee[];
}