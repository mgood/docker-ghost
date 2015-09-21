var path = require('path'),
    config;

function dbConfig() {
  var cfg = {},
      dbKey = /^DB_([A-Z]+)$/,
      m;

  for (var key in process.env) {
    m = dbKey.exec(key);
    if (m !== null && m[1] !== 'CLIENT') {
      cfg[m[1].toLowerCase()] = process.env[key];
    }
  }

  return {
    client: process.env.DB_CLIENT,
    connection: cfg
  };
}

config = {
  production: {
    fileStorage: false,
    url: process.env.GHOST_URL,
    database: dbConfig(),
    server: {
      host: '0.0.0.0',
      port: '2368'
    },
    paths: {
      contentPath: process.env.GHOST_CONTENT
    }
  }
};
module.exports = config;
