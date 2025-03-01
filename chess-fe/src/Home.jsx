import React from 'react';
import './App.css';
import { redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

async function handleRedirectToGame() {
    try {
        // Fetch the gameId from the backend
        const response = await fetch('http://localhost:8090/create-websocket?type=game');
        const data = await response.text();
    
        console.log("BAI", data);
    
        // Use regex to extract the UID from the string
        const match = data.match(/UID: ([\w-]+)/);

        
        if (match && match[1]) {
          const gameId = match[1];  // The UID is captured in the first group
    
          // Redirect to the game page with the gameId as a query parameter
          window.location.href = `http://localhost:5173/game?gameId=${gameId}`;
         // redirectToGameWithUserId(gameId, userId);
        } else {
          console.error('UID not found in the response:', data);
        }
      } catch (error) {
        console.error('Error fetching gameId:', error);
      }
}

async function redirectToGameWithUserId(gameId, userId) {
  try {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = `http://localhost:5173/game?gameId=${gameId}`;

      const userIdInput = document.createElement('input');
      userIdInput.type = 'hidden';
      userIdInput.name = 'userId';
      userIdInput.value = userId;

      form.appendChild(userIdInput);
      document.body.appendChild(form);
      form.submit();
  } catch (error) {
      console.error('Error redirecting:', error);
  }
}

const handleRedirectToBotGame = () => {
    window.location.href = 'http://localhost:5173/bot-game';
  };

function Home() {

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);

  console.log('Current UserId in Redux:', userId);

  const handleRedirectToPlayWithFriend = () => {
    window.location.href = 'http://localhost:5173/play-with-friend';
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome back to Chessly, randreican!</h1>
        <button onClick={handleRedirectToGame} className="redirect-button">
          Go to Game
        </button>
        <button onClick={handleRedirectToPlayWithFriend} className="redirect-button">
          Play with a Friend
        </button>
        <button onClick={handleRedirectToBotGame} className="redirect-button">
          Play with Bot
        </button>
      </header>
    </div>
  );
}

export default Home;
