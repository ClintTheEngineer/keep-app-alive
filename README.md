# keep-app-alive
When utilizing a cloud platform that spins down servers due to inactivity, utilize this package to occasionally ping the server and keep your instance awake.

# How to install
`npm i keep-app-alive`

# How to use
`const keepAlive = require('keep-app-alive');`
`const pingTimer = 50000(time in ms)`

`keepAlive('https://your-server-url.com', pingTimer);`