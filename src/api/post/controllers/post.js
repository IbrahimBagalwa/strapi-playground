"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async exampleAction(ctx) {
    try {
      ctx.body = "ok";
    } catch (error) {
      ctx.body = error;
    }
  },

  async find(ctx) {
    ctx.query = { ...ctx.query, local: "en" };
    const { data, meta } = await super.find(ctx);
    const now = new Date().toLocaleDateString();
    meta.date = now;
    return { data, meta };
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;
    const entity = await strapi.service("api::post.post").findOne(id, query);
    const sanitazedEntity = await this.sanitizeOutput(entity, ctx);
    const { data, meta } = this.transformResponse(sanitazedEntity);
    meta.date = new Date().toLocaleDateString();
    return { data, meta };
  },
}));
