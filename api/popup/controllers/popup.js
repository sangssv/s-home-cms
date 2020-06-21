'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    const query = { ...ctx.query };
    query.display = true;

    let entities;

    entities = await strapi.services.popup.find(query);

    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models.popup })
    );
  },
};
