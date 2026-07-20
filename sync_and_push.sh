#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_DIR="/home/omar/obsidian-vaults/research-system-rag"

echo "[1/3] Syncing latest Obsidian vault notes to Quartz content directory..."
rsync -a --delete --exclude '.obsidian' "$VAULT_DIR/" "$SCRIPT_DIR/content/"
cp -f "$SCRIPT_DIR/index.md" "$SCRIPT_DIR/content/index.md"

echo "[2/3] Verifying Quartz static compilation locally..."
cd "$SCRIPT_DIR"
npx quartz build

echo "[3/3] Committing and pushing changes to trigger GitHub Pages build..."
git add -A
if git diff --cached --quiet; then
  echo "No changes detected in note content or configuration. Nothing to push."
else
  git commit -m "Auto-sync codebase graph notes: $(date '+%Y-%m-%d %H:%M:%S')"
  git push origin main || git push origin master || {
    echo "Warning: Push failed or remote 'origin' is not set up yet."
    echo "Please configure git remote and push manually: git remote add origin <URL> && git push -u origin main"
  }
fi
