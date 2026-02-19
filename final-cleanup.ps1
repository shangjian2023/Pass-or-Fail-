Set-Location "c:\Users\共产主义接班人\OneDrive\Desktop\-"
Remove-Item -Path "check-status.ps1" -ErrorAction SilentlyContinue
git add .
git commit -m "cleanup"
git push origin main
Write-Host "Done"
