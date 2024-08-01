import { Employee } from "../../domain/Employee";
import { EmployeeRepo } from "../../domain/EmployeeRepo";
import * as fs from 'fs';

export class FlatFileEmployeeRepository implements EmployeeRepo {
  private employees: Employee[] = [];

  constructor(filePath: string) {
    this.loadEmployees(filePath);
  }

  private loadEmployees(filePath: string): void {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n');
    for (const line of lines) {
      const [lastName, firstName, dateOfBirth, email] = line.split(', ');
      if (lastName && firstName && dateOfBirth && email) {
        const dob = new Date(dateOfBirth);
        this.employees.push(new Employee(lastName, firstName, dob, email));
      }
    }
  }

  findEmployeesBornOn(month: number, day: number): Employee[] {
    return this.employees.filter(emp => 
      emp.dateOfBirth.getMonth() + 1 === month && emp.dateOfBirth.getDate() === day
    );
  }
}