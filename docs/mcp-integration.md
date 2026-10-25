# MCP-Integration

MCP (Model Context Protocol) kann Foundry-nahe Werkzeuge als klar getrennte Aktionen anbieten. Dieses Repository beschreibt nur die Schnittstelle, nicht private Server oder Zugangsdaten.

## Sichere Werkzeuge

- `inspect_world`: nur Version, Welt-ID und Dokumenttypen lesen;
- `audit_journal`: Journalreihenfolge und fehlende Asset-Referenzen melden;
- `prepare_backup`: Ziel und Umfang anzeigen, bevor kopiert wird;
- `apply_journal_patch`: nur freigegebene Journal-IDs und Text-/Bildänderungen schreiben;
- `verify_foundry`: Prozessstatus, Syntaxprüfung und sichtbare Abnahme getrennt ausgeben.

## Grenzen

MCP-Tools müssen Pfade erlauben, Zielumfang prüfen, Backups vor Schreibaktionen erzwingen und Secrets aus Eingaben/Logs entfernen. Externe Veröffentlichung, Nachrichten oder Repository-Änderungen sind eigene Aktionen mit eigener Freigabe.
