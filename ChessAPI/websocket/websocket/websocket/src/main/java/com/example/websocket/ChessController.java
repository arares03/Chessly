package com.example.websocket;

import com.example.websocket.ChessSession;
import com.example.websocket.SessionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.handler.annotation.Payload;

@Controller
public class ChessController {

    @Autowired
    private SessionManager sessionManager;

    @MessageMapping("/chess/{gameId}")
    @SendTo("/topic/move/{gameId}")
    public ChessMove sendMove(@Payload ChessMove chessMove, @DestinationVariable String gameId) {
        if (chessMove == null) {
            System.err.println("Received null ChessMove payload!");
            return null;
        }

        ChessSession chessSession = sessionManager.getSession(gameId);
        if (chessSession == null) {
            // If there's no session yet for this gameId, create one or reject the move
            chessSession = sessionManager.createSession(gameId);
        }

        if (!chessSession.canAcceptMove()) {
            System.err.println("Cannot accept move. Current state: " + chessSession.getCurrentState());
            return null;
        }

        System.out.println("ChessMove received: " + chessMove + " for gameId: " + gameId);
        // Optionally update board state, etc., in the ChessSession
        return chessMove;
    }
}

