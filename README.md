# AI Computer Setup

Dieses Repository richtet deinen Computer so ein, dass KI-Assistenten wie **Claude** oder **Codex** nicht nur Fragen beantworten - sondern echte Aufgaben auf deinem Computer erledigen können.

**Was danach möglich ist:**
- KI öffnet Dateien, liest sie und bearbeitet sie direkt
- KI führt Skripte aus und automatisiert wiederkehrende Aufgaben
- KI steuert den Browser und erledigt Web-Aufgaben automatisch
- Alles gesteuert über die gewohnte Chat-Oberfläche (Claude Desktop / Codex Desktop)

---

## Wie es funktioniert

```
Du chattest in der Desktop-App
        ↓
KI bekommt Zugriff auf deinen Computer
        ↓
KI führt Aufgaben lokal aus (Dateien, Skripte, Browser)
        ↓
Ergebnis kommt zurück in den Chat
```

Die Desktop-App ist dein Interface - das hier ist der Motor dahinter.

---

## Einrichtung

### Schritt 1 - Node.js installieren

Node.js ist die einzige Voraussetzung, die du manuell installierst. Alles andere übernimmt das Setup-Script.

**Windows:**

1. Gehe zu [nodejs.org/en/download](https://nodejs.org/en/download)
2. Wähle **Windows** im OS-Dropdown
3. Scrolle zu **"Or get a prebuilt Node.js® for"** - klicke **Windows Installer (.msi)**
4. Installer ausführen - alle Standardeinstellungen beibehalten
5. **Eingabeaufforderung** öffnen: `Win + R` → `cmd` → Enter
6. Prüfen: `node --version` sollte `v24.x.x` ausgeben

![nodejs.org Download-Seite - Windows](assets/nodejs-download-windows.png)

---

**Mac:**

1. Gehe zu [nodejs.org/en/download](https://nodejs.org/en/download) - macOS ist standardmäßig ausgewählt
2. Scrolle zu **"Or get a prebuilt Node.js® for"** - klicke **macOS Installer (.pkg)**
3. Installer ausführen - durchklicken
4. **Terminal** öffnen: Spotlight `Cmd + Space` → `Terminal` → Enter
5. Prüfen: `node --version` sollte `v24.x.x` ausgeben

![nodejs.org Download-Seite - macOS](assets/nodejs-download-mac.png)

---

### Schritt 2 - Dieses Repository holen

**Option A - Fork (empfohlen)**

Klicke oben rechts auf **Fork**. Du bekommst deine eigene Kopie, die du jederzeit anpassen kannst.

**Option B - ZIP herunterladen (kein Account nötig)**

1. Klicke oben auf den grünen **Code**-Button
2. Klicke **Download ZIP**
3. ZIP entpacken (z.B. auf dem Desktop)
4. Ordner im Terminal öffnen:
   - **Windows:** Rechtsklick im Ordner → **In Terminal öffnen**
   - **Mac:** Rechtsklick auf Ordner → **Neues Terminal bei Ordner**

---

### Schritt 3 - Setup ausführen

```bash
node setup.js
```

Das Script installiert automatisch:
1. **uv** - Python-Paketverwaltung
2. **Python 3.12** - Laufzeitumgebung für Automatisierungen
3. **Claude Code CLI** - Kommandozeilen-Interface für Claude
4. **Playwright** *(optional)* - Browser-Automatisierung

---

### Schritt 4 - Desktop-App einrichten

**Claude Desktop** - [claude.ai/download](https://claude.ai/download)
- Nach Installation: Einstellungen → Developer → MCP-Server aktivieren

**Codex Desktop** - [platform.openai.com/codex](https://platform.openai.com/codex)
- Nach Installation: Login mit OpenAI-Account

---

## Was jetzt möglich ist

Sobald alles eingerichtet ist, kannst du der KI in der Desktop-App Aufgaben geben wie:

- *"Lies alle Excel-Dateien im Ordner Downloads und erstelle eine Zusammenfassung"*
- *"Öffne unsere Angebots-Vorlage und fülle sie mit diesen Daten aus"*
- *"Prüfe jeden Morgen unsere Website auf Fehler und schicke mir einen Bericht"*

Die KI hat jetzt die Werkzeuge, das wirklich zu tun - nicht nur zu erklären wie es geht.

---

## Fehlerbehebung

**`node` nicht gefunden nach Installation (Windows)**
Terminal schließen und neu öffnen. PATH wird nur in neuen Fenstern aktualisiert.

**`uv` nicht gefunden nach Setup**
Terminal schließen, neu öffnen, dann `uv --version` prüfen.

**Berechtigung verweigert (Mac)**
Mit `sudo node setup.js` ausführen.

**Playwright-Installation schlägt fehl**
Manuell nach dem Setup ausführen:
```bash
uv pip install playwright
uv run playwright install chromium
```
