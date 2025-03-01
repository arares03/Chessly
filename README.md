# Chess Web Application

## Overview
This Chess Web Application is a full-stack project developed using **Spring Boot (Java)** for the backend and **React** for the frontend. The application enables real-time chess matches between two players over WebSockets and supports bot interaction for single-player mode.

## Features
- **User Authentication:** Sign in with Google OAuth2.
- **Multiplayer Chess:** Real-time chess matches between two players.
- **AI Bot Integration:** Play against an AI-powered chess bot.
- **WebSocket Communication:** Low-latency game updates.
- **Component-Based Frontend:** Modular React components for easy development.
- **Game Session Management:** Handles session creation, validation, and player pairing.
  
![Chessly-main-page](https://github.com/user-attachments/assets/39293d9c-754c-404a-a910-61ccf83b955c)

![Chessly-FE](https://github.com/user-attachments/assets/6d961b06-7054-4048-9e80-7ca82835ab12)
## Technologies Used
### Backend
- **Spring Boot (Java)** - API development and backend logic
- **PostgreSQL** - Database for storing user data and game history
- **STOMP WebSockets** - Real-time communication
- **JWT & OAuth2** - Secure authentication
- **Chess.js** - Chess logic processing

### Frontend
- **React.js** - UI development
- **React Router** - Navigation
- **Redux** - State management
- **SockJS & STOMP.js** - WebSocket client communication

## System Architecture
### High-Level Flow
1. **User Login** via Google OAuth2.
2. **Select Game Mode:** Play with a friend or against a bot.

3. **Game Initialization:** A WebSocket connection is established.
4. **Move Handling:** Moves are validated and sent over WebSockets.
5. **Game Completion:** The session updates upon checkmate, resignation, or timeout.

### Backend Services
- **ChessAPI:** Handles WebSocket communication and game logic.
- **Security API:** Manages authentication and access control.

### Frontend Components
- **Home Page:** Entry point for selecting game mode.
- **Game Interface:** Displays chessboard and manages WebSocket communication.
- **Bot Game Mode:** Integrates API calls to interact with the chess bot.
- **Authentication:** Manages login and session handling.

## API Endpoints
### Authentication
- `GET /oauth2/authorization/google` - Redirects to Google Login
- `POST /refresh-token` - Refresh JWT access token

### Game Management
- `POST /create-websocket` - Create a new game session
- `POST /app/chess/{gameId}` - Submit a move
- `GET /topic/move/{gameId}` - Retrieve opponent's move

### Bot Interaction
- `POST /move` - Sends a move to the bot and retrieves the AI response


