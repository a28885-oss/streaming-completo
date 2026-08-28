# 🎬 STREAMING COMPLETO - INSTALAÇÃO RÁPIDA

## ⚡ Instalação Automática (Recomendado)

### Windows:
```bash
install-windows.bat
```

### macOS/Linux:
```bash
chmod +x install-mac-linux.sh
./install-mac-linux.sh
```

---

## 📋 Instalação Manual (Se o script não funcionar)

### 1. Clone o Repositório
```bash
git clone https://github.com/a28885-oss/streaming-completo.git
cd streaming-completo
```

### 2. Obtenha sua Chave TMDB (Grátis)
- Acesse: https://www.themoviedb.org/settings/api
- Crie uma conta (leva 2 minutos)
- Copie sua "API Key"

### 3. Configure o .env
```bash
cp .env.example .env
```

Abra o arquivo `.env` e adicione:
```
PORT=5000
TMDB_API_KEY=sua_chave_aqui
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

### 4. Instale as Dependências

**Backend:**
```bash
npm install
```

**Frontend:**
```bash
cd client
npm install
cd ..
```

### 5. Execute o Projeto

**Terminal 1 - Backend:**
```bash
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run client
```

### 6. Abra no Navegador
```
http://localhost:3000
```

---

## ✅ Pronto! Você terá:

✅ Filmes e Séries Reais (TMDB API)  
✅ Busca Completa  
✅ Detalhes de Filmes/Séries  
✅ Interface Moderna e Responsiva  
✅ Tudo funcionando offline depois de carregado  

---

## 🆘 Problemas Comuns

### "Node.js não está instalado"
- Baixe em: https://nodejs.org/
- Reinicie o terminal depois de instalar

### "TMDB_API_KEY não encontrada"
- Verifique se o arquivo `.env` existe
- Confira se a chave está correta
- Reinicie o servidor (`npm run dev`)

### "Porta 5000/3000 já em uso"
- Feche outros programas que usam essas portas
- Ou mude a PORT no arquivo `.env`

---

## 📱 Estrutura do Projeto

```
streaming-completo/
├── server.js                 # Backend Express
├── config/
│   └── tmdb.js              # Config TMDB
├── client/                   # Frontend React
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.js
│   └── package.json
├── .env.example
├── package.json
└── README.md
```

---

## 🚀 Pronto para Começar?

1. Execute o script de instalação
2. Configure o .env com sua chave TMDB
3. Abra 2 terminais e rode os comandos
4. Acesse http://localhost:3000

**Aproveite! 🎉**
