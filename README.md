# 🎬 Streaming Completo - Plataforma com TMDB API

Plataforma de streaming completa com **filmes e séries novos e antigos** integrados com a **API TMDB**.

## ✨ Funcionalidades

### 🎥 Filmes
- ✅ Filmes em Destaque (Trending)
- ✅ Filmes Populares (Novos e Antigos)
- ✅ Filmes Clássicos (Melhores Avaliados)
- ✅ Lançamentos Próximos
- ✅ Busca por Filme
- ✅ Detalhes Completos do Filme

### 📺 Séries
- ✅ Séries em Destaque (Trending)
- ✅ Séries Populares (Novos e Antigos)
- ✅ Séries Clássicas (Melhores Avaliadas)
- ✅ Busca por Série
- ✅ Detalhes Completos da Série

## 🚀 Instalação Rápida

### 1. Clonar o Repositório
```bash
git clone https://github.com/a28885-oss/streaming-completo.git
cd streaming-completo
```

### 2. Obter Chave TMDB API
1. Acesse: https://www.themoviedb.org/settings/api
2. Crie uma conta (grátis)
3. Copie sua chave de API

### 3. Configurar Variáveis de Ambiente
```bash
cp .env.example .env
```

Edite o arquivo `.env`:
```
PORT=5000
TMDB_API_KEY=sua_chave_api_aqui
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

### 4. Instalar Dependências Backend
```bash
npm install
```

### 5. Instalar Dependências Frontend
```bash
cd client
npm install
cd ..
```

### 6. Rodar o Projeto

**Terminal 1 - Backend:**
```bash
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run client
```

### 7. Acessar
```
http://localhost:3000
```

## 📡 API Endpoints

### Filmes
- `GET /api/filmes/trending` - Filmes em destaque
- `GET /api/filmes/populares?page=1` - Filmes populares
- `GET /api/filmes/classicos?page=1` - Filmes clássicos
- `GET /api/filmes/lancamentos?page=1` - Lançamentos
- `GET /api/filme/:id` - Detalhes do filme

### Séries
- `GET /api/series/trending` - Séries em destaque
- `GET /api/series/populares?page=1` - Séries populares
- `GET /api/series/classicas?page=1` - Séries clássicas
- `GET /api/serie/:id` - Detalhes da série

### Busca
- `GET /api/buscar?query=termo&tipo=filme` - Buscar filmes
- `GET /api/buscar?query=termo&tipo=serie` - Buscar séries

## 🛠️ Tecnologias

- **Backend**: Node.js, Express, Axios
- **Frontend**: React, React Router, Axios
- **API**: TMDB (The Movie Database)
- **Banco de Dados**: MongoDB (opcional)
- **Autenticação**: JWT

## 📦 Estrutura do Projeto

```
streaming-completo/
├── server.js                 # Servidor principal
├── package.json
├── .env.example
├── .gitignore
├── config/
│   └── tmdb.js              # Configuração TMDB
├── client/                  # Frontend React
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🎯 Próximos Passos

- [ ] Reprodutor de vídeo integrado
- [ ] Sistema de login e favoritos
- [ ] Histórico de visualização
- [ ] Avaliações e comentários
- [ ] Download de conteúdo
- [ ] Modo offline

## 📝 Licença

MIT

## 👨‍💻 Autor

**a28885-oss**

---

**Desenvolvido com ❤️ para os amantes de filmes e séries**
