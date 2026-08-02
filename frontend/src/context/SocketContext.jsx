import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [lastSeatUpdate, setLastSeatUpdate] = useState(null);

  useEffect(() => {
    const socketUri = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '/';
    const newSocket = io(socketUri, {
      transports: ['websocket', 'polling'],
      reconnectionAttempts: 10
    });

    newSocket.on('connect', () => {
      setIsConnected(true);
      console.log('[Socket.io] Connected to server ID:', newSocket.id);
    });

    newSocket.on('seat_updated', (data) => {
      console.log('[Socket.io] Live Seat Event:', data);
      setLastSeatUpdate(data);
    });

    newSocket.on('disconnect', () => {
      setIsConnected(false);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, isConnected, lastSeatUpdate }}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocket = () => useContext(SocketContext);
