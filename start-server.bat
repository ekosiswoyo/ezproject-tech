@echo off
echo Installing server dependencies...
npm install --prefix . express nodemailer cors body-parser nodemon

echo.
echo Starting backend server...
node server.js

pause