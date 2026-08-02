@echo off
title Deploying Alagappa NME Portal to GitHub Pages
echo ======================================================================
echo    BUILDING & PUBLISHING TO GITHUB PAGES (gh-pages)
echo ======================================================================
echo.
cd /d %~dp0frontend
call npm run build

echo.
echo Pushing built dist directory to gh-pages branch...
cd /d %~dp0
git subtree push --prefix frontend/dist origin gh-pages

echo.
echo ======================================================================
echo Deployment complete!
echo Live URL: https://vijaymahes9080.github.io/Alagappa_NME/
echo ======================================================================
echo.
pause
