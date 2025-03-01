package com.example.websocket;

import com.example.websocket.ChessSession;
import com.example.websocket.SessionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Controller
public class ChessJoinController {

    @Autowired
    private SessionManager sessionManager;

    // This will be called when the client sends to /app/chess/join/{gameId}
    @MessageMapping("/chess/join/{gameId}")
    public void joinGame(@DestinationVariable String gameId, Message<?> message) {
        // Retrieve or create the ChessSession using the gameId
        ChessSession session = sessionManager.getSession(gameId);
        if (session == null) {
            session = sessionManager.createSession(gameId);
        }

       String simpSessionId = (String) message.getHeaders().get("simpSessionId");
        if (simpSessionId == null) {
            System.err.println("No simpSessionId found in joinGame");
            return;
        }

        // Add the “player” to the session
        session.addPlayer(simpSessionId);

        System.out.println(
                "Player joined gameId=" + gameId
                        + " -> total players: " + session.getPlayers().size()
                        + ", state=" + session.getCurrentState()
        );
    }
}
