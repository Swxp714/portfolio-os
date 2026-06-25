@echo off
REM Portfolio OS - local preview server
cd /d "%~dp0"
echo.
echo  ==========================================
echo   PORTFOLIO.OS  -  http://localhost:8777
echo  ==========================================
echo.
echo  브라우저가 자동으로 열립니다. 종료하려면 이 창에서 Ctrl+C.
echo.
start "" http://localhost:8777
python -m http.server 8777
