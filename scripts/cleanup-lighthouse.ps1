param(
  [switch]$Preview
)

Write-Output "Searching for lighthouse report files..."
$files = Get-ChildItem -Path . -Recurse -Include "lighthouse-*.html","lighthouse-*.json" -ErrorAction SilentlyContinue

if (-not $files) {
  Write-Output "No lighthouse report files found."
  exit 0
}

if ($Preview) {
  Write-Output "Found the following files (preview):"
  $files | ForEach-Object { Write-Output " - $($_.FullName)" }
  exit 0
}

Write-Output "Removing the following lighthouse report files..."
$files | ForEach-Object { Write-Output "Removing: $($_.FullName)"; Remove-Item -LiteralPath $_.FullName -Force }

Write-Output "Cleanup complete."
