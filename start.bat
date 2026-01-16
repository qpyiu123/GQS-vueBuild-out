@echo off
echo Starting Nginx...
cd /d %~dp0/nginx-1.25.1
:: 检查是否已经在运行，避免重复启动
tasklist | findstr /i "nginx.exe" > nul
if %errorlevel% equ 0 (
    echo Nginx is already running.
) else (
    start nginx.exe
    echo Nginx started successfully at http://localhost:8080
)
pause