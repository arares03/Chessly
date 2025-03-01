import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import LoginSuccess from './LoginSuccess';
import PlayWithFriend from './PlayWithFriend';
import Game from './Game';
import BotGame from './BotGame';
import { Provider } from 'react-redux';
import store from './store'

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
  <Router>
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/login-success" element={<LoginSuccess></LoginSuccess>}></Route>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/play-with-friend" element={<PlayWithFriend />} />
      <Route path='/bot-game' element={<BotGame />} />
    </Routes>
  </Router>
  </Provider>
);
