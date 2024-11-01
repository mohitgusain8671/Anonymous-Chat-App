# Anonymous Chat App

A simple and lightweight anonymous chat application built with **Express**, **EJS**, and **Socket.IO**. This application allows users to send messages anonymously in real-time.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [Code Overview](#code-overview)
    - [app.js](#appjs)
    - [index.ejs](#indexejs)
    - [script.js](#scriptjs)
    - [style.css](#stylecss)
- [Usage](#usage)

## Features
- Real-time messaging using WebSockets
- Anonymous chats
- User-friendly interface
- Notification sound for new messages

## Technologies Used
- **Node.js** - JavaScript runtime
- **Express** - Web framework for Node.js
- **EJS** - Templating engine
- **Socket.IO** - Real-time bidirectional event-based communication
- **HTML/CSS** - Frontend technologies

## Installation

1. **Clone the repository and Navigate to the project directory**:

   ```bash
   git clone https://github.com/yourusername/anonymous-chat-app.git
   cd anonymous-chat-app
   ```
2. **Install dependencies**:
   ```bash
    npm install
   ```

3.  **Start the Devlopment server**:
    ```bash
    npm run dev
    ```

    **For production**:

    ```bash
    npm start
    ```
4. **Open your browser and navigate to http://localhost:3000 (or the port you specified).**

## How It Works
- The application uses Socket.IO to handle real-time communication between clients and the server.
- Users can connect to the server, send messages, and receive messages from other users in real-time.
- Messages are displayed in a chat window, allowing users to engage in anonymous conversations.

## Code Overview

### `app.js`

- Initializes an Express server.
- Sets up Socket.IO for real-time bidirectional communication.
- Serves static files from the public directory.
- Renders the main `index.ejs` template.

### `index.ejs`

- Contains the HTML layout for the chat application.
- Includes a notification banner for new messages.
- Connects to the Socket.IO server for receiving and broadcasting messages.

### `script.js`

- Uses the Socket.IO client to handle real-time messaging.
- Retrieves the user's socket ID for identifying message senders.
- Implements a notification sound for new messages using the Audio API.
- Handles sending messages through an input field and a button.
- Listens for incoming messages and displays them in the chat window, distinguishing between sender and receiver.

### `style.css`

- **Global Styles**: Resets margin and padding, centers content, and applies a light background.
- **Chat Container**: Styles the chat box with rounded corners, shadow effects, and a fixed width.
- **Header**: Styles the chat header with a blue background and centered white text.
- **Chat Messages**: Creates a scrollable area for messages and styles individual messages differently based on the sender.
- **Input Area**: Styles the message input field and send button for usability and interactivity.
- **Scrollbar Customization**: Adjusts scrollbar appearance for the chat messages area.
- **Notification Banner**: Styles a banner that appears when a new message is received

## Usage

- Enter a message in the input field and click "Send" or press Enter to send it.
- Incoming messages will trigger a notification sound and display a banner alert.


---