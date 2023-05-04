/**
 * restaurant controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::restaurant.restaurant', ({ strapi }) => ({ 

    async find(ctx) {
        // some custom logic here
    ctx.query = { ...ctx.query, local: 'en' }

    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    // some more custom logic
    meta.date = Date.now()

    return { data, meta };
    },


}) );
