@echo off

title Bot Runner - Veryify bot by jn03

color C

cmd /c pause
cls

:StartBot

node --no-warnings index.js

goto StartBot
