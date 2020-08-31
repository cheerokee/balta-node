'use strict';
var config = require('../config');
var sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(config.sendgridKey);
exports.send = async (to, subject, body) => {
  sendgrid.send({
    to: to,
    from: 'contato@inovensti.com.br',
    subject: subject,
    html: body
  });
};
