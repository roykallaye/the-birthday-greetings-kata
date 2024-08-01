import { EmployeeRepo } from '../../domain/EmployeeRepo';
import { FlatFileEmployeeRepository } from './FlatFileEmployeeRepo';
import { DatabaseEmployeeRepository } from './DatabaseEmployeeRepo';
import { WebServiceEmployeeRepository } from './WebServiceEmployeeRepo';
import * as path from 'path';

const filePath = path.resolve(__dirname, 'employees.txt');

export class RepositoryFactory {
  static getEmployeeRepository(): EmployeeRepo {
    let r = 2;
    if ( r === 1 ) {
      return new FlatFileEmployeeRepository(filePath);
    } else if ( r === 2 ) {
      return new DatabaseEmployeeRepository();
    } else if ( r === 3 ) {
      return new WebServiceEmployeeRepository();
    } else {
      throw new Error("No suitable repository found.");
    }
  }
}
