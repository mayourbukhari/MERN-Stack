# Simple Fullstack Application

A basic fullstack setup with Node.js backend and vanilla HTML/CSS/JavaScript frontend.

## 🚀 Features

- **Backend**: Express.js server with CORS enabled
- **API Endpoint**: `/getmessage` that returns "Hello World" message
- **Frontend**: Modern, responsive HTML page that fetches and displays the API response
- **Error Handling**: Proper error handling for both client and server

## 📋 Prerequisites

- Node.js installed on your system
- npm (comes with Node.js)

## 🛠️ Setup & Installation

1. Navigate to the project directory:
   ```cmd
   cd "c:\Users\MAYOUR\OneDrive\Documents\GitHub\MERN Stack\FullstackSampleProject"
   ```

2. Install dependencies:
   ```cmd
   npm install
   ```

## 🏃‍♂️ Running the Application

### Start the Server

```cmd
npm start
```

The server will start at `http://localhost:5000`

### Open the Client

1. Open your web browser
2. Navigate to the client folder
3. Open `client/index.html` in your browser, or
4. Use a simple HTTP server for better development experience:
   ```cmd
   cd client
   python -m http.server 3000
   ```
   Then visit `http://localhost:3000`

## 📡 API Endpoints

- `GET /getmessage` - Returns a hello world message
- `GET /` - Server health check

## 🏗️ Project Structure

```
FullstackSampleProject/
├── server/
│   └── index.js          # Express server
├── client/
│   └── index.html        # Frontend webpage
├── package.json          # Project dependencies and scripts
└── README.md            # This file
```

## 🎨 Features of the Client

- Modern, responsive design with gradient background
- Loading states and animations
- Error handling with visual feedback
- Refresh button to re-fetch data
- Beautiful styling with CSS animations

## 🔧 How it Works

1. The Express server runs on port 5000
2. The server provides a `/getmessage` API endpoint
3. The client makes a fetch request to the API
4. The response is displayed on the webpage
5. CORS is enabled to allow cross-origin requests

## 🐛 Troubleshooting

- **Server not starting**: Make sure port 5000 is not in use
- **Client can't connect**: Ensure the server is running before opening the client
- **CORS errors**: The server has CORS enabled by default

## 🚀 Next Steps

You can extend this application by:
- Adding more API endpoints
- Implementing a database
- Adding user authentication
- Using a frontend framework like React
- Adding real-time features with WebSockets
