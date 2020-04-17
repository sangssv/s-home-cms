'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    const query = { ...ctx.query };
    const { page = 1, per_page = 6, type } = query;
    delete query.page;
    delete query.per_page;
    if (type === 'all') {
      delete query.type;
    }
    query._start = (page - 1) * per_page;
    query._limit = per_page;
    query.status = 'publish';

    let entities;

    entities = await strapi.services['interior-design'].find(query);

    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models['interior-design'] })
    );
  },

  count(ctx) {
    const query = { ...ctx.query };
    const { type } = query;
    query.status = 'publish';

    if (type === 'all') {
      delete query.type;
    }

    return strapi.services['interior-design'].count(query);
  },

  async findOne(ctx) {
    const slug = ctx.params.id;

    let entity = await strapi.services['interior-design'].findOne({ slug });
    const count = parseInt(entity.count || 0);
    entity = await strapi.services['interior-design'].update({ slug }, { count: count + 1 });
    return sanitizeEntity(entity, { model: strapi.models['interior-design'] });
  }
};
