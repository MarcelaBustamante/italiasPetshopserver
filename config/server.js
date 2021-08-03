require('dotenv').config();
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6e21ab0b5b165310fb328f6b8283f3b5'),
    },
  },
});
