# Fix Git repository structure
Set-Location "c:\Users\共产主义接班人\OneDrive\Desktop\-"

# Remove temporary batch files
Remove-Item -Path "check-network.bat" -ErrorAction SilentlyContinue
Remove-Item -Path "fix-push.bat" -ErrorAction SilentlyContinue
Remove-Item -Path "update-git.bat" -ErrorAction SilentlyContinue
Remove-Item -Path "verify.bat" -ErrorAction SilentlyContinue

# Remove the incorrectly tracked folder
git rm -r --cached final-grade-calculator 2>$null

# Add the correctly named folder
git add "期末求生计算器/"

# Commit the rename
git commit -m "rename folder"

# Push to remote
git push origin main

Write-Host "Done"
