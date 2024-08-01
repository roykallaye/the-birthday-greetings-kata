import { CommunicationService } from "../../domain/CommunicationService";
import * as nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

export class SmtpEmailService implements CommunicationService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });
  }

  async sendBirthdayGreetings(email: string, name: string): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Happy Birthday!',
      text: `Happy birthday, dear ${name}!`
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}
