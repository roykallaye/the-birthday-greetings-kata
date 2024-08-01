import dotenv from 'dotenv';
dotenv.config();
import { BirthdayService } from "./src/application/BirthdayService";
import { ServiceFactory } from "./src/infrastructure/Services/ServicesFactory";
import { RepositoryFactory } from "./src/infrastructure/Repositories/RepoFactory";
import * as path from 'path';

const filePath = path.resolve(__dirname, 'employees.txt');

// calling the static method to get an instance of the employee repo
const employeeRepo = RepositoryFactory.getEmployeeRepository();

const communicationService = ServiceFactory.getCommunicationService();

const birthdayService = new BirthdayService(employeeRepo, communicationService);

const today = new Date();

// send greetings
birthdayService.sendGreetings(today);
