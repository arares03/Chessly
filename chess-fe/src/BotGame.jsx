import './init';
import React, { useState, useEffect, useRef } from 'react';
import ChessBoard from 'chessboardjsx';
import { Chess } from 'chess.js';
import { useNavigate, useLocation } from 'react-router-dom';

async function getBotMove(fen, playerMove) {
  console.log("Am trimis:", fen, playerMove);
  
  const body = fen
    ? JSON.stringify({ move: playerMove, fen })  
    : JSON.stringify({ move: playerMove });     

  const response = await fetch('https://api.openchess.io/move', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });

  const data = await response.json();
  return {
    move: data.move, 
    fen: data.fen,   
  };
}

const BotGame = () => {
  const [fen, setFen] = useState('start'); 
  const [color, setColor] = useState('white');  
  const [text, setText] = useState(''); 
  const [gameStarted, setGameStarted] = useState(false);  
  const game = useRef(null);  
  const navigate = useNavigate(); 
  const { search } = useLocation();  
  
  const gameId = new URLSearchParams(search).get('gameId');  
  
  useEffect(() => {
    game.current = new Chess();  

    if (!gameId) {
      setColor('white');
    }

    if (color === 'white') {
      setText("Your turn (White)");
    } else {
      setText("Bot's turn (Black)");
      makeBotMove();
    }
  }, [color]);  
  const makeBotMove = async () => {
    const botMoveData = await getBotMove(game.current.fen(), '');  
    game.current.ugly_move(game.current.move(botMoveData.move));  
    setFen(prevFen => prevFen === updatedFen ? prevFen + ' ' : updatedFen);
    setText("Your turn (White)");  
  };

  const onDrop = async ({ sourceSquare, targetSquare }) => {
    if (
      (game.current.turn() === 'b' && color === 'black') ||
      (game.current.turn() === 'w' && color === 'white')
    ) {

        const previousFen = game.current.fen();

      const move = game.current.move({
        from: sourceSquare,
        to: targetSquare,
      });

      console.log(move);


      setFen(game.current.fen());  

      if (move) {
        setText("Bot's turn (Black)");  
        const botMoveData = await getBotMove(gameStarted?previousFen: null, move.lan);
        
      console.log(botMoveData, "si avem", game.current.fen());
        setGameStarted(true);

    game.current.move(botMoveData.move);
    setFen(game.current.fen());
    setText("Your turn (White)");  
      } else {
        setText('Invalid move, try again');
      }
    }
  };

  return (
    <>
 {game.current?.isGameOver() ? (
        <div className="header">
          {game.current?.turn() === 'b' ? <h1>White won!</h1> : <h1>Black won!</h1>}
        </div>
      ) : (
        <div className="info">
          <h2>You play {color}</h2>
          {text === '' ? (
            game.current?.turn() === 'b' ? (
              <h2>Black's turn</h2>
            ) : (
              <h2>White's turn</h2>
            )
          ) : (
            <h2>{text}</h2>
          )}
        </div>
      )}

      <div className="GameApp">
        <ChessBoard position={fen} onDrop={onDrop} orientation={color === 'white' ? 'white' : 'black'} />
      </div>
    </>
  );
};

export default BotGame;
