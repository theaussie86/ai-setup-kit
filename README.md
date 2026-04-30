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

1. Go to [nodejs.org](https://nodejs.org) and download the **LTS** installer (.msi)

<!-- Screenshot: nodejs.org download page, LTS button highlighted -->
> **Screenshot coming soon**

2. Run the installer, click through - all defaults are fine

<!-- Screenshot: Node.js installer wizard -->
> **Screenshot coming soon**

3. Open **Command Prompt** (`Win + R` → type `cmd` → Enter)
4. Verify: `node --version` should print something like `v22.x.x`

<!-- Screenshot: cmd showing node --version output -->
> **Screenshot coming soon**

---

### Mac

**Option A - Installer (recommended for beginners)**

1. Go to [nodejs.org](https://nodejs.org) and download the **LTS** installer (.pkg)

<!-- Screenshot: nodejs.org download page, macOS pkg download -->
> **Screenshot coming soon**

2. Run the `.pkg` installer, click through

3. Open **Terminal** (Spotlight: `Cmd + Space` → type `Terminal`)
4. Verify: `node --version`

**Option B - Homebrew**

```bash
brew install node
```

---

## Step 2 - Clone this repo

```bash
# Windows (Command Prompt) or Mac (Terminal):
git clone https://github.com/YOUR_USERNAME/ai-setup-kit.git
cd ai-setup-kit
```

No git? Download the ZIP from GitHub → Extract → open folder in terminal.

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

<!-- Screenshot: terminal running node setup.js, showing OK checkmarks -->
> **Screenshot coming soon**

---

## Step 4 - Start Claude Code

Open a **new** terminal window (important - so PATH updates take effect), then:

```bash
claude
```

Follow the login prompt to connect your Anthropic account.

<!-- Screenshot: claude CLI first launch, login prompt -->
> **Screenshot coming soon**

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
