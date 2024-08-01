export interface CommunicationService {
  sendBirthdayGreetings(email: string, name: string): Promise<void>;
}