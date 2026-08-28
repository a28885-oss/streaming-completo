@echo off
REM Script de Instalação Automática para Windows
REM Streaming Completo

echo ========================================
echo  🎬 STREAMING COMPLETO - INSTALADOR
echo ========================================
echo.

echo Verificando se Node.js está instalado...
node --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js não está instalado!
    echo 📥 Baixe em: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js encontrado!
echo.
echo Instalando dependências do Backend...
call npm install

echo ✅ Backend instalado!
echo.
echo Instalando dependências do Frontend...
cd client
call npm install
cd ..

echo ✅ Frontend instalado!
echo.
echo ========================================
echo  ✅ INSTALAÇÃO CONCLUÍDA COM SUCESSO!
echo ========================================
echo.
echo 📝 PRÓXIMO PASSO:
echo 1. Abra o arquivo .env
echo 2. Coloque sua chave TMDB API
echo 3. Execute: npm run dev (Terminal 1)
echo 4. Execute: npm run client (Terminal 2)
echo 5. Acesse: http://localhost:3000
echo.
echo Para pegar sua chave TMDB:
echo 👉 https://www.themoviedb.org/settings/api
echo.
pause
