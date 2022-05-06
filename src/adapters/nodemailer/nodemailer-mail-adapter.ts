import nodemailer from "nodemailer";
import { MailAdpter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "13c508bb10cd4f",
    pass: "2e3ce0675b97c4",
  },
});

export class NodemailerMailAdapter implements MailAdpter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@fidget.com>",
      to: "Matheus Alencar <matheusalencar6942@gmail.com>",
      subject,
      html: body,
    });
  }
}
