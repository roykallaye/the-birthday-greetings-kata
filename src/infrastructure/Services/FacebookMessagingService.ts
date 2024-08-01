import { CommunicationService } from "../../domain/CommunicationService";

export class FacebookMessagingService implements CommunicationService {
  public sentMessages: { recipient: string, name: string }[] = [];

  async sendBirthdayGreetings(email: string, name: string): Promise<void> {
    // simulating sending a Facebook message by adding to the sentMessages array
    this.sentMessages.push({ recipient: email, name });
    console.log(`Facebook message sent to ${name} at ${email}`);
  }
}
