# MGD-Foundry-VTT_Skill

Öffentliche, kampagnenneutrale Werkzeuge und Anleitungen für Foundry Virtual Tabletop und D&D-Notizbücher.

## Enthalten

- Skill `/vttl-Notizbuch` für übersichtliche SL-Notizbücher;
- Assistentenablauf für Szenen, Vorlesetexte, Hinweise, Dialoge und Spielerbilder;
- sichere Backup- und Änderungsregeln für lokale Foundry-Welten;
- Read-only-Beispiel zur Prüfung von Journal-Seiten und Asset-Referenzen;
- MCP-Integrationshinweise ohne Secrets oder konkrete private Serverdaten;
- neutrales Foundry-Modul-Beispiel für eine eigene Suchoberfläche.

## Datenschutz

Dieses Repository enthält absichtlich keine Foundry-LevelDB, privaten Kampagnen, Backups, persönlichen Bilder, Passwörter, Tokens oder lokalen Benutzer-IDs. Eigene Kampagnen müssen über lokale Konfiguration oder sichere, nicht versionierte Dateien eingebunden werden.

## Grundidee

Ein gutes Notizbuch zeigt dem Spielleiter genau an der richtigen Stelle: Bild, Vorlesetext, Spieleroptionen, NSC-Antworten, Hinweisbedeutung, Proben und Übergang. Kein einzelner Würfelwurf darf die Hauptspur ungewollt stoppen.

<!-- MGD-RELATED:START -->
## Skill-Empfehlungen

Passt gut dazu:

| Skill | Befehl | Wofür |
|---|---|---|
| [MGD_Todo_SKILL](https://github.com/MichaelGahnDESIGN/MGD_Todo_SKILL) | `/todo` | Aufgabenliste in einer HTML-Datei, dazu /board, /wissen, /fragenkatalog, /prozesse |
| [MGD_Living-Documentation](https://github.com/MichaelGahnDESIGN/MGD_Living-Documentation) | `/doku` | Lebendige Dokumentation: keine Entscheidung geht verloren |
| [MGD_AI-Thread](https://github.com/MichaelGahnDESIGN/MGD_AI-Thread) | `/thread` | Ehrliche Übergabe, bevor das Kontextfenster voll ist |

## Verwandte MGD Projekte

<details><summary>Alle MGD-Skills und Werkzeuge anzeigen</summary>

| Projekt | Befehl | Wofür |
|---|---|---|
| [MGD_Todo_SKILL](https://github.com/MichaelGahnDESIGN/MGD_Todo_SKILL) | `/todo` | Aufgabenliste in einer HTML-Datei, dazu /board, /wissen, /fragenkatalog, /prozesse |
| [MGD_DEV_SKILL](https://github.com/MichaelGahnDESIGN/MGD_DEV_SKILL) | `/dev` | Release, Sync, Backup, Cleanup, Tests und Wissensdokumentation |
| [MGD_Autopilot_SKILL](https://github.com/MichaelGahnDESIGN/MGD_Autopilot_SKILL) | `/autopilot` | Projektziele sicher unbeaufsichtigt abarbeiten |
| [MGD_Backup_SKILL](https://github.com/MichaelGahnDESIGN/MGD_Backup_SKILL) | `/backup` | Backups lokal, NAS und Cloud mit Prüfsummen |
| [MGD_AI-Thread](https://github.com/MichaelGahnDESIGN/MGD_AI-Thread) | `/thread` | Ehrliche Übergabe, bevor das Kontextfenster voll ist |
| [MGD_ProjectClean_SKILL](https://github.com/MichaelGahnDESIGN/MGD_ProjectClean_SKILL) | `/projectclean` | Abschluss und Aufräumen: Version, Tests, Commit, Doku, Backup |
| [MGD_Living-Documentation](https://github.com/MichaelGahnDESIGN/MGD_Living-Documentation) | `/doku` | Lebendige Dokumentation: keine Entscheidung geht verloren |
| [MGD_BugReport_SKILL](https://github.com/MichaelGahnDESIGN/MGD_BugReport_SKILL) | `/bugreport` | Handbuch für Bug-Reports, Feedback und QA in Apps |
| [MGD_AI-PlayTest_SKILL](https://github.com/MichaelGahnDESIGN/MGD_AI-PlayTest_SKILL) | `/playtest` | Test aus Nutzerperspektive für KI-gebaute Funktionen |
| [MGD_AI-Testaccount_SKILL](https://github.com/MichaelGahnDESIGN/MGD_AI-Testaccount_SKILL) | `/testaccount` | Testkonten per Plus-Adresse mit klaren Sicherheitsregeln |
| [MGD_Software-Updater_SKILL](https://github.com/MichaelGahnDESIGN/MGD_Software-Updater_SKILL) | `/software-updater` | Update-Systeme planen und umsetzen |
| [MGD_Divi5-Dev_SKILL](https://github.com/MichaelGahnDESIGN/MGD_Divi5-Dev_SKILL) | `/divi` | WordPress und Divi 5: Animationen, Plugins, Child-Themes |
| [MGD_JTL-OPC_SKILL](https://github.com/MichaelGahnDESIGN/MGD_JTL-OPC_SKILL) | `/jtl-opc` | JTL-Shop-5-Seiten im OnPage Composer automatisch befüllen |
| [MGD-SEO](https://github.com/MichaelGahnDESIGN/MGD-SEO) | `/seo` | SEO-Skill mit lokalem Prüfkern |
| [MGD-Motion-Graphics-Video-Skill](https://github.com/MichaelGahnDESIGN/MGD-Motion-Graphics-Video-Skill) | `/mgd-video` | Reels, YouTube, Werbefilme und Animationen |
| [MGD_AI-Basic-Projektordner_TOOL](https://github.com/MichaelGahnDESIGN/MGD_AI-Basic-Projektordner_TOOL) | `Vorlage` | Projektordner für ChatGPT Codex, Cowork und Claude Code |
| [MGD_Docker_Projektbuilder](https://github.com/MichaelGahnDESIGN/MGD_Docker_Projektbuilder) | `Generator` | Docker-Plattform-Gerüste aus sechs Fragen |
| [MGD_Claude-Codex_MCP](https://github.com/MichaelGahnDESIGN/MGD_Claude-Codex_MCP) | `MCP` | Lokales MCP für Aufgaben, Chat und Übergaben zwischen KI-Agenten |

</details>

Mit `/skill-update` (im Todo-Skill) holst du alle lokal installierten MGD-Skills auf den neuesten Stand.
<!-- MGD-RELATED:END -->

## Lizenz

MIT. Foundry VTT, D&D5e und deren Inhalte bleiben Eigentum ihrer jeweiligen Rechteinhaber. Dieses Repository enthält keine proprietären Foundry- oder D&D-Inhalte.
