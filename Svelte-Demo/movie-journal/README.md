# Zweck:
Auf der Webseite kann eine Einkaufsliste angelegt werden.
Diese wird in einem Cloud-Storage gespeichert.
Diese ist nur einem User zugänglich.
Momentan kann die Webseite nur von jeweis einem User benutzt werden.

# Aufrufen des Programms:
Clone das Repositorys.
Führe folgende Commandlineaufrufe durch:
```batch
npm install
npm run dev
```
Über Local-Host wird die Webseite gestartet.
Nach Klick auf die Host-Adresse wird die Webseite angezeigt.

# Interagieren mit dem Programm:
Mit der Suchleiste kann nach Elementen der Einkaufsliste gesucht werden.
Mit dem Feldern Artikel und Anzahl kann ein Element erstellt werden.
Mit dem Klicken auf dem Button hinzufügen wird dieses im Cloud-Storage gespeichert.
Unten werden immer alle Elemente der Einkaufsliste angezeigt.

# Support:
Sollte etwas nicht funktionieren, bitte ein Issue öffen,
um das wir uns kümmern können.

# Funktionsweise:
Mit Svelte wurde die Ansicht und die Funktionen, die eine lokal gespeicherte json-Datei steuern, erstellt.
Die verschiedenen Funktionen (Suchen, Objekt hinzufügen und Anzeigen der vorhandenen Objekte) sind in .Svelte Modulen untergebracht, welche über die Hauptapp gesteuert werden.

# Ansätze:
- Svelte
- Sveltekit
- Deno
- Snel
- local Storage
- MongoDB (Deno und Svelte)
- cloudstore
- SQLite
- Deno-Module
- Node.js
- Svelte-Module

Nachzusehen unter:
- https://github.com/plants-for-friends/movie-ratings
- https://github.com/plants-for-friends/plant-exchange
- alle Branches in diesem Repo
