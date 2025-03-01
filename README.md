Chess Web Application

Overview

This Chess Web Application is a full-stack project developed using Spring Boot (Java) for the backend and React for the frontend. The application enables real-time chess matches between two players over WebSockets and supports bot interaction for single-player mode.

Features

User Authentication: Sign in with Google OAuth2.

Multiplayer Chess: Real-time chess matches between two players.

AI Bot Integration: Play against an AI-powered chess bot.

WebSocket Communication: Low-latency game updates.

Component-Based Frontend: Modular React components for easy development.

Game Session Management: Handles session creation, validation, and player pairing.

Technologies Used

Backend

Spring Boot (Java) - API development and backend logic

PostgreSQL - Database for storing user data and game history

STOMP WebSockets - Real-time communication

JWT & OAuth2 - Secure authentication

Chess.js - Chess logic processing

Frontend

React.js - UI development

React Router - Navigation

Redux - State management

SockJS & STOMP.js - WebSocket client communication

System Architecture

High-Level Flow

User Login via Google OAuth2.

Select Game Mode: Play with a friend or against a bot.

Game Initialization: A WebSocket connection is established.

Move Handling: Moves are validated and sent over WebSockets.

Game Completion: The session updates upon checkmate, resignation, or timeout.

Backend Services

ChessAPI: Handles WebSocket communication and game logic.

Security API: Manages authentication and access control.

Frontend Components

Home Page: Entry point for selecting game mode.

Game Interface: Displays chessboard and manages WebSocket communication.

Bot Game Mode: Integrates API calls to interact with the chess bot.

Authentication: Manages login and session handling.

API Endpoints

Authentication

GET /oauth2/authorization/google - Redirects to Google Login

POST /refresh-token - Refresh JWT access token

Game Management

POST /create-websocket - Create a new game session

POST /app/chess/{gameId} - Submit a move

GET /topic/move/{gameId} - Retrieve opponent's move

Bot Interaction

POST /move - Sends a move to the bot and retrieves the AI response

How to Run

Prerequisites

Node.js (for frontend)

Java 17+ (for backend)

PostgreSQL (database setup)

Frontend Setup

cd frontend
npm install
npm run dev
