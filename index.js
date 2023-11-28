const https = require('https');
const renderAppUrl = 'enteryourrenderdomainhere';
// Set the interval (in milliseconds) at which the server should be pinged
const pingInterval = 60000; // 1 minute


function keepAlive() {
    console.log('Pinging the server...');
    https.get(renderAppUrl, (res) => {
      console.log(`Server response: ${res.statusCode}`);
    });
  }

// Ping the server initially
  keepAlive();
  
  // Set up the interval to keep pinging the server
  setInterval(keepAlive, pingInterval);