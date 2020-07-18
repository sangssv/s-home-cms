'use strict';
const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

module.exports = {
  async sendMail(data = {}) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'contact.shomeinterior@gmail.com',
        pass: 'SHome2020'
      }
    });

    const { id, name, phone, email, project, area, description, created_at } = data;
    const createdAt = new Date(created_at);

    // send mail with defined transport object
    await transporter.sendMail({
      to: "thanhtung.shomeinterior@gmail.com", // list of receivers
      subject: "Tư vấn - Báo giá", // Subject line
      text: `
        ID: ${id}
        Tên KH: ${name || 'Không nhập'}
        SĐT: ${phone || 'Không nhập'}
        Email: ${email || 'Không nhập'}
        Dự án: ${project || 'Không nhập'}
        Diện tích: ${area || 'Không nhập'}
        Nội dung: ${description || 'Không nhập'}
        Ngày gửi: ${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()} ${createdAt.getHours()}:${createdAt.getMinutes()}
      `,
    });

    // strapi.plugins['email'].services.email.send({
    //   to: 'pxsang194@gmail.com',
    //   from: 'pxsang194@gmail.com',
    //   replyTo: 'no-reply@strapi.io',
    //   subject: 'Use strapi email provider successfully',
    //   text: 'Hello world!',
    //   html: 'Hello world!',
    // }).then(() => {
    //   console.log('success')
    // }).catch(error => {
    //   console.log('error', error[0].messages[0])
    // });

    // console.log('process.env', process.env)
    // console.log('sendMail', data)
    // console.log('sendMail', data)
    // const { id, name, phone, email, project, area, description, created_at } = data;
    // const createdAt = new Date(created_at);
    // const msg = {
    //   to: 'pxsang194@gmail.com',
    //   from: 'pxsang194@gmail.com',
    //   subject: 'Tư vấn - Báo giá',
    //   text: `
    //     ID: ${id}
    //     Tên KH: ${name || 'Không nhập'}
    //     SĐT: ${phone || 'Không nhập'}
    //     Email: ${email || 'Không nhập'}
    //     Dự án: ${project || 'Không nhập'}
    //     Diện tích: ${area || 'Không nhập'}
    //     Nội dung: ${description || 'Không nhập'}
    //     Ngày gửi: ${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()} ${createdAt.getHours()}:${createdAt.getMinutes()}
    //   `,
    // };

    // sgMail.send(msg);
  }
}
