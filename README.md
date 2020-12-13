# PAPWVirtualLibrary
Postup pre správne fungovanie virtuálnej knižnice.
Virtuálna knižnica bola vytvorená vo WSL Ubuntu 20.04, Node.js v15.2.1.

1. Databáza:
  a)Stiahnuť si postgresql 13
  b)Vytvoriť databázu na základe súboru conDB.js
  c)Vytvoriť si tabuľky v databáze na základe súboru commandySQL.pgsql
  d)Databázový server sa spúšťa pomocou príkazu: sudo service postgresql start
2. Web Server:
  a)Nainstalovať požadované package pomocou príkazu: npm i
  b)Server sa spúšta pomocou príkazu: npm start
  c)Server sa vypína pomocou klávesovej skratky: CTRL+C
