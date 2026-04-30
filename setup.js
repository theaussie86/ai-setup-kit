#!/usr/bin/env node

const { execSync, spawnSync } = require('child_process');
const os = require('os');
const path = require('path');
const readline = require('readline');

const platform = os.platform();
const isWindows = platform === 'win32';

const UV_PATHS = isWindows
  ? [
      path.join(process.env.LOCALAPPDATA || '', 'uv', 'bin'),
      path.join(os.homedir(), '.local', 'bin'),
    ]
  : [
      path.join(os.homedir(), '.local', 'bin'),
      path.join(os.homedir(), '.cargo', 'bin'),
    ];

function addToPath(...dirs) {
  const sep = isWindows ? ';' : ':';
  process.env.PATH = [...dirs, process.env.PATH].join(sep);
}

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit', shell: true });
    return true;
  } catch {
    return false;
  }
}

function installed(cmd) {
  const check = isWindows ? 'where' : 'which';
  const result = spawnSync(check, [cmd], { encoding: 'utf8', shell: true });
  return result.status === 0;
}

function ok(msg) {
  console.log(`  OK  ${msg}`);
}

function step(msg) {
  console.log(`\n>>> ${msg}`);
}

async function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(question, ans => { rl.close(); resolve(ans.trim()); }));
}

async function installUv() {
  step('uv (Python manager)');
  if (installed('uv')) { ok('uv already installed'); return; }

  console.log('  Installing uv...');
  const success = isWindows
    ? run('powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"')
    : run('curl -LsSf https://astral.sh/uv/install.sh | sh');

  if (!success) {
    console.error('  ERROR: uv install failed. See https://docs.astral.sh/uv/getting-started/installation/');
    process.exit(1);
  }

  addToPath(...UV_PATHS);
  ok('uv installed');
}

async function installPython() {
  step('Python 3.12');
  const success = run('uv python install 3.12');
  if (!success) {
    console.error('  ERROR: Python install failed.');
    process.exit(1);
  }
  ok('Python 3.12 ready');
}

async function installClaudeCode() {
  step('Claude Code CLI');
  if (installed('claude')) { ok('claude already installed'); return; }

  console.log('  Installing @anthropic-ai/claude-code...');
  const success = run('npm install -g @anthropic-ai/claude-code');
  if (!success) {
    console.error('  ERROR: Claude Code install failed.');
    process.exit(1);
  }
  ok('claude installed');
}

async function installPlaywright() {
  step('Playwright (optional)');
  const answer = await ask('  Install Playwright for browser automation? [y/N] ');
  if (answer.toLowerCase() !== 'y') { console.log('  Skipped.'); return; }

  run('uv pip install playwright');
  run('uv run playwright install chromium');
  ok('Playwright + Chromium ready');
}

async function main() {
  console.log('\n========================================');
  console.log('   AI Agent Environment Setup');
  console.log('========================================');
  console.log(`Platform: ${platform}`);

  addToPath(...UV_PATHS);

  await installUv();
  await installPython();
  await installClaudeCode();
  await installPlaywright();

  console.log('\n========================================');
  console.log('   Setup complete!');
  console.log('========================================');
  console.log('\nNext steps:');
  console.log('  1. Open a new terminal window');
  console.log('  2. Run: claude');
  console.log('  3. Follow the login prompt\n');
}

main().catch(err => { console.error(err); process.exit(1); });
