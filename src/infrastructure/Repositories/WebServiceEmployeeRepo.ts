import { Employee } from "../../domain/Employee";

export class WebServiceEmployeeRepository {
  private employees: Employee[] = []; // simulating fetching data

  constructor() {
    // placeholder data
    this.employees = [
      new Employee('Brown', 'Alice', new Date('1987-03-15'), 'alice.brown@example.com'),
      new Employee('Davis', 'Mark', new Date('1992-11-25'), 'mark.davis@example.com'),
    ];
  }

  findEmployeesBornOn(month: number, day: number): Employee[] {
    return this.employees.filter(emp =>
      emp.dateOfBirth.getMonth() + 1 === month && emp.dateOfBirth.getDate() === day
    );
  }
}
