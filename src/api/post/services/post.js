"use strict";

/**
 * post service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::post.post", ({ strapi }) => ({
  async exampleService(...args) {
    console.log(args);
    const response = { okay: true };
    if (response.okay === false) {
      return { response, error: true };
    }
    return response;
  },

  async find(...args) {
    const { results, pagination } = await super.find(...args);
    results.forEach((result) => {
      result.counter = 1;
    });
    return { results, pagination };
  },

  async findOne(entityId, params = {}) {
    return strapi.entityService.findOne(
      "api::post.post",
      entityId,
      this.getFetchParams(params)
    );
  },
}));
