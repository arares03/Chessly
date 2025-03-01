package com.example.websocket;

import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class SessionManager {
    // Map gameId -> ChessSession
    private final Map<String, ChessSession> sessions = new ConcurrentHashMap<>();

    public ChessSession createSession(String gameId) {
        ChessSession session = new ChessSession(gameId);
        sessions.put(gameId, session);
        return session;
    }

    public ChessSession getSession(String gameId) {
        return sessions.get(gameId);
    }

    public void removeSession(String gameId) {
        sessions.remove(gameId);
    }
}
