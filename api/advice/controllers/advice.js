'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');
const { sendMail } = require('../../../config/functions/sendMail');

module.exports = {
  async create(ctx) {
    let entity;
    entity = await strapi.services.advice.create(ctx.request.body);

    let entry = sanitizeEntity(entity, { model: strapi.models.advice });
    console.log('entry', entry);
    sendMail(entry);
    return entry;
  },
};
