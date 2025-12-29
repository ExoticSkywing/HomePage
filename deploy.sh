#!/usr/bin/env bash
set -euo pipefail

# Resolve repository root based on the script location.
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILD_DIR="$ROOT_DIR/dist"
TARGET_DIR="/www/wwwroot/1yo.cc"

cd "$ROOT_DIR"

echo "Building homepage..."
pnpm run build

if [[ ! -d "$BUILD_DIR" ]]; then
  echo "Build output not found at $BUILD_DIR" >&2
  exit 1
fi

if [[ ! -d "$TARGET_DIR" ]]; then
  echo "Target directory missing: $TARGET_DIR" >&2
  exit 1
fi

echo "Syncing build to $TARGET_DIR (excluding .user.ini)..."
rsync -av --delete \
  --exclude=".user.ini" \
  "$BUILD_DIR"/ "$TARGET_DIR"/

echo "Deployment complete."
