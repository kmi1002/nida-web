const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  env: {
    API_HOST: process.env.PUBLIC_UAPI_HOSTRL,
    API_PORT: process.env.API_PORT,
    GA_APP_ID: process.env.GA_APP_ID,
  },
};
