#!/usr/bin/env bash
set -eu

PREVIEW=0
if [ "${1-}" = "--preview" ] ; then
  PREVIEW=1
fi

echo "Searching for lighthouse report files..."
FILES=$(find . -type f \( -name 'lighthouse-*.html' -o -name 'lighthouse-*.json' \) || true)

if [ -z "$FILES" ]; then
  echo "No lighthouse report files found."
  exit 0
fi

if [ "$PREVIEW" -eq 1 ]; then
  echo "Found the following files (preview):"
  echo "$FILES"
  exit 0
fi

echo "Removing the following lighthouse report files..."
echo "$FILES" | while IFS= read -r f; do
  echo "Removing: $f"
  rm -f -- "$f"
done

echo "Cleanup complete."
