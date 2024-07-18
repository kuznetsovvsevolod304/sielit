const express = require('express');
const http = require('http');

// Create an instance of an Express application
const app = express();

// A sample route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Create an HTTP server
const server = http.createServer(app);

// Start the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Function to gracefully shut down the server
async function shutdownServer() {
  console.log('Shutting down server...');

  // Stop accepting new connections
  server.close((err) => {
    if (err) {
      console.error('Error occurred while closing the server:', err);
      process.exit(1);
    }
    console.log('Server closed successfully.');
  });

  // Wait for existing connections to close
  await new Promise(resolve => {
    server.on('close', resolve);
  });

  // Perform any additional cleanup here, if necessary
  console.log('Server shutdown complete.');
}

// Handle termination signals for graceful shutdown
process.on('SIGTERM', shutdownServer);
process.on('SIGINT', shutdownServer);
