'use strict';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

module.exports = {
  sendMail(data = {}) {
    console.log('sendMail', data)
    const { id, name, phone, email, project, area, description, created_at } = data;
    const createdAt = new Date(created_at);
    const msg = {
      to: 'pxsang194@gmail.com',
      from: 'pxsang194@gmail.com',
      subject: 'Tư vấn - Báo giá',
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
    };

    sgMail.send(msg);
  }
}
