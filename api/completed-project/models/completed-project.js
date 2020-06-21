'use strict';

/**
 * Lifecycle callbacks for the `completed-project` model.
 */

const slugify = require('slugify');

module.exports = {
  beforeSave: async (model, attrs, options) => {
    if (options.method === 'insert' && attrs.title) {
      model.set('slug', slugify(attrs.title.toLowerCase()));
    } else if (options.method === 'update' && attrs.title) {
      attrs.slug = slugify(attrs.title.toLowerCase());
    }
  },
};
