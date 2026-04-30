# AI Agent Environment Setup

Cross-platform setup kit for AI agent environments. Installs Python (via uv) and Claude Code CLI with one command - on Windows and Mac.

## What gets installed

| Tool | Purpose |
|------|---------|
| [uv](https://docs.astral.sh/uv/) | Python version + package manager |
| Python 3.12 | Runtime for AI scripts and automations |
| [Claude Code CLI](https://claude.ai/code) | AI agent in your terminal |
| Playwright *(optional)* | Browser automation |

---

## Step 1 - Install Node.js

Node.js is the only thing you need to install manually. The setup script handles everything else.

### Windows

1. Go to [nodejs.org/en/download](https://nodejs.org/en/download)
2. Select **Windows** in the OS dropdown
3. Scroll down to **"Or get a prebuilt Node.js® for"** - click **Windows Installer (.msi)**
4. Run the installer - click through, all defaults are fine
5. Open **Command Prompt**: `Win + R` → type `cmd` → Enter
6. Verify: type `node --version` - should print `v24.x.x`

![nodejs.org download page - Windows](assets/nodejs-download-windows.png)

---

### Mac

1. Go to [nodejs.org/en/download](https://nodejs.org/en/download) - macOS is selected by default
2. Scroll down to **"Or get a prebuilt Node.js® for"** - click **macOS Installer (.pkg)**
3. Run the `.pkg` installer - click through
4. Open **Terminal**: Spotlight `Cmd + Space` → type `Terminal` → Enter
5. Verify: type `node --version` - should print `v24.x.x`

![nodejs.org download page - macOS](assets/nodejs-download-mac.png)

**Option B - Homebrew**

```bash
brew install node
```

---

## Step 2 - Download this repo

**Easiest (no Git needed):**

1. Click the green **Code** button at the top of this page
2. Click **Download ZIP**
3. Extract the ZIP somewhere (e.g. Desktop)
4. Open the extracted folder in your terminal:
   - **Windows:** right-click inside the folder → **Open in Terminal**
   - **Mac:** right-click the folder → **New Terminal at Folder** (or drag into Terminal)

**Alternative (if you have Git):**

```bash
git clone https://github.com/theaussie86/ai-setup-kit.git
cd ai-setup-kit
```

---

## Step 3 - Run setup

```bash
node setup.js
```

The script will:
1. Install `uv` (Python manager)
2. Install Python 3.12
3. Install Claude Code CLI
4. Ask if you want Playwright (browser automation) - optional

---

## Step 4 - Start Claude Code

Open a **new** terminal window (important - so PATH updates take effect), then:

```bash
claude
```

Follow the login prompt to connect your Anthropic account.

---

## Troubleshooting

**`node` not found after install (Windows)**
Close and reopen Command Prompt. The PATH only updates in new windows.

**`uv` not found after setup**
Close and reopen your terminal, then run `uv --version` to verify.

**Permission error on Mac**
Run with: `sudo node setup.js`

**Playwright install fails**
Run manually after setup:
```bash
uv pip install playwright
uv run playwright install chromium
```
