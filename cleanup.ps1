Set-Location "c:\Users\共产主义接班人\OneDrive\Desktop\-"
Remove-Item -Path "fix-repo.ps1" -ErrorAction SilentlyContinue
Remove-Item -Path "final-push.ps1" -ErrorAction SilentlyContinue
git add .
git commit -m "cleanup temp files"
git push origin main
git log --oneline -5
Write-Host "Cleanup completed"
