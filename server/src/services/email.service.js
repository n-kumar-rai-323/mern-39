const nodemailer = require("nodemailer");
const { smtpConfig } = require("../config/config");
class EmailService {

    #transport;
    constructor() {
        try {
            let config = {
                host: smtpConfig.host,
                port: smtpConfig.port,
                auth: {
                    user: smtpConfig.user,
                    pass: smtpConfig.password
                }
            }
            if (smtpConfig.provider === 'gmail') {
                config = {
                    ...config,
                    service: smtpConfig.provider
                }
            }
            this.#transport = nodemailer.createTransport(config)
        } catch (exception) {
            console.log("**** Error connecting email service ****")
        }
    }

    async sendEmail({ to, sub, message, attachments = null, cc = null, bcc = null }) {
        try {
            let body = {
                to: to,
                from: smtpConfig.from,
                subject: sub,
                html: message
            };
            if (cc) {
                body['cc'] = cc
            }
            if (bcc) {
                body['bcc'] = bcc
            }
            if (attachments) {
                body['attachments'] = attachments
            }
            let result = await this.#transport.sendMail(body);
            console.log("📧 Email sent:", result.messageId);
            return result;

        } catch (exception) {
            throw {
                code: 500,
                message: "Error Sending Email" + exception.message,
                status: "EMAIL_SEND_ERR"
            }
        }
    }
}

const emailSvg = new EmailService()

module.exports = emailSvg