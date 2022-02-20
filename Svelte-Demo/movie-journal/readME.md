#  Zweck:
Auf der Webseite kann eine Einkaufsliste angelegt werden.
Diese wird in einem Cloud-Storage gespeichert.
Diese ist allen Usern zugänglich.
So kann ein Haushalt eine gemeinsame Einkaufsliste zwischen verschiedenen Endgeräten erstellen.
Momentan kann die Webseite nur von einem Haushalt benutzt werden, da sie für alle User gleich ist.

# Aufrufen des Programms:
Clonen des Repositorys.
```bash
npm install
npm run dev.
```
Die Webseite wird angezeigt.
 
# Interagieren mit dem Programm:
Mit der Suchleiste kann nach Elementen der Einkaufsliste gesucht werden.
Mit dem Feldern Artikel und Anzahl kann ein Element erstellt werden.
Mit dem Klicken auf dem Button hinzufügen wird dieses im Cloud-Storage gespeichert.
Unten werden immer alle Elemente der Einkaufsliste angezeigt.

# Support:
Sollte etwas nicht funktionieren, bitte einen Issue öffen,
um den wir uns kümmern können.

## Funktionsweise:
Mit Svelte wurde die Ansicht und die Funktionen, die die Cloud-Datenbank callen erstellt.
Die verschiedenen Funktionen (Suchen, Objekt hinzufügen und Anzeigen der vorhandenen Objekte) sind in .Svelte Modulen untergebracht, welche über die Hauptapp gesteuert werden.
