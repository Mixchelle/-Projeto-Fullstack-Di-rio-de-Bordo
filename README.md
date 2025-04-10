# 🚀 Projeto Fullstack — Diário de Bordo

## 🧠 Objetivo

Aprender e praticar o fluxo completo de desenvolvimento: **frontend + backend integrados**.  
A proposta é criar um pequeno diário onde usuários podem cadastrar entradas com título e conteúdo, e visualizar todos os registros feitos.

> 🎯 O foco é:  
> - Aprender a **enviar dados do frontend para o backend**  
> - Aprender a **listar dados do backend no frontend**  
> - Criar hooks de API personalizados (`useApi`)  
> - Rodar os dois servidores (Next.js e Django) juntos em paralelo


## 🗂️ Estrutura de repositório

Este projeto será feito em um **único repositório**, com frontend e backend separados por pastas:

diario-bordo/
├── frontend/      → Aplicação Next.js
├── backend/       → Aplicação Django + PostgreSQL
├── README.md
└── .gitignore


## 🔧 Tecnologias utilizadas

### Frontend (pasta `/frontend`)
- Next.js
- Axios
- TailwindCSS
- CSS puro

### Backend (pasta `/backend`)
- Python 3.10+
- Django
- Django REST Framework
- PostgreSQL
- django-cors-headers

---

## 📝 Requisitos do Projeto

### ✅ Funcionalidades

#### 📌 Backend
- Criar o model `Registro` com os campos:
  - `titulo` (CharField, máx 100)
  - `conteudo` (TextField)
  - `criado_em` (DateTimeField auto_now_add)

- Criar endpoints:
  - `POST /api/registros/` → salva novo registro
  - `GET /api/registros/` → retorna todos os registros em ordem de criação

- Ativar CORS para `http://localhost:3000`

#### 📌 Frontend
- Criar um formulário com os campos:
  - Título
  - Conteúdo
  - Botão de "Salvar"

- Criar `hook` personalizado para chamadas API:
  - Arquivo: `hooks/useApi.js`
  - Funções: `getRegistros()`, `createRegistro(data)`

- Listar registros abaixo do formulário:
  - Mostrar título, data e conteúdo
  - Mostrar mensagem caso não haja registros

- Estilizar com TailwindCSS

- Mostrar alertas em caso de erro ou sucesso no envio

---

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos
- Python 3.10+
- Node.js 18+
- PostgreSQL rodando localmente
- Yarn ou npm

### 1. Clonar o projeto

```bash
git clone https://github.com/seu-usuario/diario-bordo.git
cd diario-bordo
```

---

### 2. Rodar o Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate no Windows
pip install -r requirements.txt

# Criar banco e rodar as migrações
python manage.py makemigrations
python manage.py migrate

# Rodar servidor
python manage.py runserver
```

> A API estará em `http://localhost:8000/api/registros/`

---

### 3. Rodar o Frontend

```bash
cd frontend
npm install
npm run dev
```

> O site estará em `http://localhost:3000`

---

## 🔄 Exemplo de `useApi.js`

```js
import axios from '../services/api';
import { useCallback } from 'react';

export const useApi = () => {
  const getRegistros = useCallback(async () => {
    const { data } = await axios.get('/registros/');
    return data;
  }, []);

  const createRegistro = useCallback(async (registro) => {
    const { data } = await axios.post('/registros/', registro);
    return data;
  }, []);

  return { getRegistros, createRegistro };
};
```

---

## 📦 Organização sugerida

```
diario-bordo/
├── frontend/
│   ├── pages/
│   │   └── index.js          → Formulário + listagem
│   ├── hooks/
│   │   └── useApi.js
│   ├── services/
│   │   └── api.js            → Instância do Axios
│   └── styles/               → Tailwind
│
├── backend/
│   ├── diario_bordo/         → Configurações Django
│   ├── registros/            → App com model, views, urls
│   ├── manage.py
```

---

## 🧠 Divisão sugerida por dia

| Dia | Tarefa                                  |
|-----|------------------------------------------|
| 1   | Setup inicial + model + formulário       |
| 2   | API funcionando (GET/POST) + CORS        |
| 3   | Integração front/back + useApi + listagem|
| 4   | Feedbacks, validações e estilos finais   |

---

## ⭐ Extras (opcional para quem quiser ir além)

- Página de detalhes de registro (`/registros/[id]`)
- Deleção de registro
- Autenticação simples
- Deploy no Vercel + Render

---

## 🫂 Dica final

Rodar um projeto fullstack é desafiador no início, mas **extremamente recompensador**.  
Testem cada parte separadamente, confirmem com o Postman, e depois integrem.

**Qualquer dúvida, chama no grupo ou fala comigo! 🚀**


