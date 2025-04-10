
# 🚀 Projeto Fullstack — Diário de Bordo

## 🧠 Objetivo

Aprender e praticar o fluxo completo de desenvolvimento: **frontend + backend integrados**.

A proposta é criar um pequeno diário onde usuários podem cadastrar entradas com título e conteúdo, e visualizar todos os registros feitos.

> 🎯 O foco é:  
> - Aprender a **enviar dados do frontend para o backend**  
> - Aprender a **listar dados do backend no frontend**  
> - Criar hooks de API personalizados (`useApi`)  
> - Rodar os dois servidores (Next.js e Django) juntos em paralelo  
> - Trabalhar com **branches, issues e pull requests**

---

## 👤 Organização do projeto por desenvolvedor(a)

### ✅ O que cada pessoa deve fazer:

1. **Criar uma issue no GitHub com seu nome**  
   Ex: `Implementação de João`

2. **Criar uma branch com seu nome no padrão abaixo:**

```bash
git checkout -b desenvolvimento/joao
```

3. Trabalhar normalmente nessa branch (sem dar push na `main`!)

4. Ao finalizar a tarefa, **abrir um Pull Request** para a `main`, vinculando à issue.

---

## 🗂️ Estrutura do repositório

```
diario-bordo/
├── frontend/      → Aplicação Next.js
├── backend/       → Aplicação Django + PostgreSQL
├── README.md
└── .gitignore
```

---

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

### Backend
- Criar o model `Registro` com os campos:
  - `titulo` (CharField)
  - `conteudo` (TextField)
  - `criado_em` (DateTimeField auto_now_add)

- Endpoints:
  - `GET /api/registros/`
  - `POST /api/registros/`

- Liberar CORS para `http://localhost:3000`

### Frontend
- Criar formulário com título + conteúdo
- Criar `useApi.js` com:
  - `getRegistros()`
  - `createRegistro(data)`

- Mostrar registros abaixo do formulário
- Estilizar com TailwindCSS

---

## ⚙️ Como rodar localmente

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

A API estará em: `http://localhost:8000/api/registros/`

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

O site estará em: `http://localhost:3000`

---

## 🧠 Divisão sugerida por dia

| Dia | Tarefa                                  |
|-----|------------------------------------------|
| 1   | Setup inicial + model + formulário       |
| 2   | API funcionando (GET/POST) + CORS        |
| 3   | Integração front/back + useApi + listagem|
| 4   | Feedbacks, validações e estilos finais   |

---

## ✨ Exemplo de `useApi.js`

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


## 🧾 Template visual de referência

Vocês podem usar esse layout como inspiração para o design da interface:

🔗 Template visual no Lovable

https://bordo-diario-fullstack.lovable.app/



## 🧾 Checklist antes de abrir o PR

- [ ] A branch está com seu nome? (ex: `desenvolvimento/joao`)
- [ ] A task está vinculada a uma issue com seu nome?
- [ ] O projeto roda localmente (`frontend` e `backend`)?
- [ ] O PR está claro, com um título objetivo? (ex: `feat: implementação do formulário`)

---

## 🤝 Ajuda

Se precisar de ajuda com Git, rotas, Django, Next.js, Tailwind, ou quiser tirar dúvidas sobre os hooks ou CORS, so me pedir ajuda 😄  
Bora aprender juntos e trabalhar como um time de verdade 🚀
```
