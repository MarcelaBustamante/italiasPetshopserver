'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async ctx =>{
        const { name, total, items } = ctx.request.body;
        const { id } = ctx.state.user;

        const order = await strapi.services.order.create({
            name, total,items,user:id
        })
        return order;
    }

};
