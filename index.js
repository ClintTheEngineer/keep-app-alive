// index.js

const https = require('https');

function keepAlive(renderAppUrl = 'https://example.org', pingInterval = 60000) {
  console.log('Pinging the server...');
  https.get(renderAppUrl, (res) => {
    console.log(`Server response: ${res.statusCode}`);
  });
}

// Ping the server initially
keepAlive();

// Set up the interval to keep pinging the server
setInterval(() => keepAlive(), pingInterval);

module.exports = keepAlive;

