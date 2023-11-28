const https = require('https');

function keepAlive(config = {}) {
  const { renderAppUrl: defaultRenderAppUrl = 'https://exampleurl.com', pingInterval: defaultPingInterval = 60000 } = config;
  let { renderAppUrl = defaultRenderAppUrl, pingInterval = defaultPingInterval } = config;

  console.log('Pinging the server...');
  https.get(renderAppUrl, (res) => {
    return res.statusCode;
  });
  
  // Set up the interval to keep pinging the server
  setInterval(() => {
    console.log('Pinging the server...');
    https.get(renderAppUrl, (res) => {
      return res.statusCode;
    });
  }, pingInterval);
}

// Ping the server initially
keepAlive();

module.exports = keepAlive;

