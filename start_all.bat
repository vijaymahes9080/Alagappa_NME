@echo off
title Alagappa University Real-Time NME Portal System Launcher
echo ======================================================================
echo    ALAGAPPA UNIVERSITY REAL-TIME NME COURSE REGISTRATION SYSTEM
echo ======================================================================
echo.
echo Launching Backend API & Socket Server (Port 5000)...
start "Alagappa NME Backend API (Port 5000)" cmd /k "cd /d %~dp0backend && npm run dev"

echo Launching Frontend React App (Port 3000)...
start "Alagappa NME Frontend React App (Port 3000)" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo ======================================================================
echo Both servers have been launched in separate terminal windows!
echo - Backend API:  http://localhost:5000
echo - Frontend UI:   http://localhost:3000
echo ======================================================================
echo.
pause
