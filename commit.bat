@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo ============================================
echo   Git Commit ^& Push - Tam Son Project
echo ============================================
echo.

:: Hien thi trang thai hien tai
git status
echo.

:: Hoi commit message
set /p MSG="Nhap commit message (Enter de dung message mac dinh): "
if "%MSG%"=="" set MSG=Update: cap nhat du an Tam Son

:: Add tat ca thay doi
git add .

:: Commit
git commit -m "%MSG%"

:: Push len GitHub
echo.
echo Dang push len GitHub...
git push

echo.
if %ERRORLEVEL%==0 (
    echo [OK] Push thanh cong!
) else (
    echo [LOI] Push that bai. Kiem tra ket noi hoac cai dat remote.
)

echo.
pause
