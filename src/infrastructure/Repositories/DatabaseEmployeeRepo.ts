import { Employee } from "../../domain/Employee";

export class DatabaseEmployeeRepository {
  private employees: Employee[] = []; // simulating a database

  constructor() {
    // placeholder data
    this.employees = [
      new Employee('Doe', 'Jane', new Date('1985-07-31'), 'jane.doe@example.com'),
      new Employee('Smith', 'John', new Date('1990-05-10'), 'john.smith@example.com'),
    ];
  }

  findEmployeesBornOn(month: number, day: number): Employee[] {
    return this.employees.filter(emp =>
      emp.dateOfBirth.getMonth() + 1 === month && emp.dateOfBirth.getDate() === day
    );
  }
}
