import { Employee } from "../src/domain/Employee";
import { EmployeeRepo } from "../src/domain/EmployeeRepo";
import { BirthdayService } from "../src/application/BirthdayService";
import { CommunicationService } from "../src/domain/CommunicationService";

// Mock implementation of EmployeeRepo to simulate data source for testing.
class MockEmployeeRepo implements EmployeeRepo {
  private employeeRepository: Employee[] = [];

  // Sets the mock data for employees.
  setEmployees(employees: Employee[]) {
    this.employeeRepository = employees;
  }

  // Finds employees born on a given day and month.
  findEmployeesBornOn(month: number, day: number): Employee[] {
    return this.employeeRepository.filter(emp => 
      emp.dateOfBirth.getMonth() + 1 === month && emp.dateOfBirth.getDate() === day
    );
  }
}

// Mock implementation of CommunicationService to simulate communication for testing.
class MockCommunicationService implements CommunicationService {
  public sentCommunications: { email: string, name: string }[] = [];

  // Simulates sending a birthday greeting email by storing in an array.
  async sendBirthdayGreetings(email: string, name: string): Promise<void> {
    this.sentCommunications.push({ email, name });
  }
}

describe('BirthdayService', () => {
  let employeeRepository: MockEmployeeRepo;
  let communicationService: MockCommunicationService;
  let birthdayService: BirthdayService;

  // Sets up mock dependencies before each test case.
  beforeEach(() => {
    employeeRepository = new MockEmployeeRepo();
    communicationService = new MockCommunicationService();
    birthdayService = new BirthdayService(employeeRepository, communicationService);
  });

  // Test case: Should send greetings to employees born today.
  it('should send greetings to employees born today', () => {
    const today = new Date('2024/05/12');
    employeeRepository.setEmployees([
      new Employee('Doe', 'John', new Date('1982/10/08'), 'john.doe@example.com'),
      new Employee('Ann', 'Mary', new Date('1975/09/11'), 'mary.ann@example.com'),
      new Employee('Smith', 'Bob', new Date('1994/05/12'), 'bob.smith@example.com')
    ]);

    birthdayService.sendGreetings(today);

    expect(communicationService.sentCommunications.length).toBe(1);
    expect(communicationService.sentCommunications).toContainEqual({ email: 'bob.smith@example.com', name: 'Bob' });
  });

  // Test case: Should not send greetings to employees not born today.
  it('should not send greetings to employees not born today', () => {
    const today = new Date('2024/05/12');
    employeeRepository.setEmployees([
      new Employee('Doe', 'John', new Date('1982/08/01'), 'john.doe@example.com'),
      new Employee('Ann', 'Mary', new Date('1975/09/11'), 'mary.ann@example.com')
    ]);

    birthdayService.sendGreetings(today);

    expect(communicationService.sentCommunications.length).toBe(0);
  });
});
