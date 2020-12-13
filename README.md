# PAPWVirtualLibrary
Postup pre správne fungovanie virtuálnej knižnice.
Virtuálna knižnica bola vytvorená vo WSL Ubuntu 20.04, Node.js v15.2.1.

1. Databáza:
    1. Stiahnuť si postgresql 13
    2. Vytvoriť databázu na základe súboru conDB.js
    3. Vytvoriť si tabuľky v databáze na základe súboru commandySQL.pgsql
    4. Databázový server sa spúšťa pomocou príkazu: sudo service postgresql start
2. Web Server:
    1. Nainstalovať požadované package pomocou príkazu: npm i
    2. Server sa spúšta pomocou príkazu: npm start
    3. Server sa vypína pomocou klávesovej skratky: CTRL+C
