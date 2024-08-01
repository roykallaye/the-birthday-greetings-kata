import { CommunicationService } from '../../domain/CommunicationService';
import { SmtpEmailService } from './SmtpEmailService';
import { FacebookMessagingService } from './FacebookMessagingService';



export class ServiceFactory {
    
  static getCommunicationService(): CommunicationService {
    let s = 2;

    if ( s === 1 ) {
      return new SmtpEmailService();
    } else if ( s = 2 ) {
      return new FacebookMessagingService();
    } else {
      throw new Error("No suitable service found.");
    }
  }
}
