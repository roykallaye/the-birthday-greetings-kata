import { EmployeeRepo } from "../domain/EmployeeRepo";
import { CommunicationService } from "../domain/CommunicationService";

export class BirthdayService {
  constructor(
    private employeeRepository: EmployeeRepo,
    private communicationService: CommunicationService
  ) {}

  sendGreetings(today: Date): void {
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const employees = this.employeeRepository.findEmployeesBornOn(month, day);
    
    employees.forEach(employee => {
      this.communicationService.sendBirthdayGreetings(employee.email, employee.firstName);
    });
  }
}
