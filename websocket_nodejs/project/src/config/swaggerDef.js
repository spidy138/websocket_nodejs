module.exports = {
    info: {
      // API information (required)
      title: 'Wayfarer', // Title (required)
      version: '1.0.0', // Version (required)
    },
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        scheme: 'bearer',
        in: 'header',
      },
    },
  };