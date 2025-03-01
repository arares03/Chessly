package com.example.websocket;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class ChessSession {

    public enum SessionState {
        WAITING,
        PLAYING,
        FINISHED
    }

    private final String sessionId;
    private SessionState currentState;
    private final List<String> players = new ArrayList<>();

    public ChessSession() {
        this.sessionId = UUID.randomUUID().toString();
        this.currentState = SessionState.WAITING;
    }

    public ChessSession(String sessionId) {
        this.sessionId = sessionId;
        this.currentState = SessionState.WAITING;
    }

    public String getSessionId() {
        return sessionId;
    }

    public SessionState getCurrentState() {
        return currentState;
    }

    public void setCurrentState(SessionState newState) {
        this.currentState = newState;
    }

    public List<String> getPlayers() {
        return players;
    }

    /**
     * Called when a new player joins.
     * If we reach 2 players, switch to PLAYING.
     */
    public void addPlayer(String playerId) {
        if (!players.contains(playerId)) {
            players.add(playerId);
        }
        if (players.size() == 2) {
            currentState = SessionState.PLAYING;
        }
    }

    public boolean canAcceptMove() {
        return currentState == SessionState.PLAYING;
    }
}
