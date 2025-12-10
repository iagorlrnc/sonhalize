# Migração de EmailJS para Nodemailer

## 📋 Resumo

O projeto foi migrado de **EmailJS** para **Nodemailer**, permitindo:

- ✅ Controle total sobre o envio de emails
- ✅ Suporte nativo a anexos de imagem
- ✅ Backend seguro com credenciais privadas
- ✅ Maior flexibilidade na formatação de emails

---

## 🚀 Configuração

### 1. Instalar Dependências

```bash
npm install
```

Isso instalará:

- `nodemailer` - Para envio de emails
- `express` - Servidor backend
- `cors` - Permitir requisições do frontend
- `dotenv` - Variáveis de ambiente
- `concurrently` - Rodar frontend e backend simultaneamente

### 2. Configurar Variáveis de Ambiente

Copie `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-app-gmail
EMAIL_RECIPIENT=seu-email@gmail.com
VITE_API_URL=http://localhost:3001
```

#### Para Gmail:

1. Ative a autenticação de dois fatores
2. Gere uma **senha de app** em: https://myaccount.google.com/apppasswords
3. Use a senha gerada no campo `EMAIL_PASSWORD`

#### Para outros emails:

- Substitua `EMAIL_SERVICE` pelos valores suportados:
  - `outlook`, `yahoo`, `aol`, etc.
- Ou configure manualmente com `host`, `port`, `secure`

---

## 🛠️ Scripts

### Desenvolvimento

```bash
# Frontend + Backend juntos
npm run dev:all

# Apenas Frontend (Vite)
npm run dev

# Apenas Backend (Node.js)
npm run dev:server
```

### Produção

```bash
# Build do frontend
npm run build

# Executar servidor backend
node server/index.js
```

---

## 📁 Estrutura

```
project/
├── src/
│   └── components/
│       └── RentalForm.tsx       # Formulário (frontend)
├── server/
│   └── index.js                 # Servidor Express + Nodemailer
├── .env                         # Variáveis de ambiente (não commitar)
├── .env.example                 # Template de variáveis
├── package.json                 # Dependências atualizadas
└── vite.config.ts               # Config do Vite
```

---

## 🔄 Fluxo

1. **Frontend (React)**: Usuário preenche formulário e envia
2. **POST /api/send-email**: Frontend envia para backend em JSON
3. **Backend (Node.js)**:
   - Valida dados
   - Converte base64 para buffer
   - Envia email com Nodemailer + anexo
4. **Response**: Backend retorna status de sucesso/erro

---

## 📧 Formato do Email

O email será enviado em HTML com:

- Nome, telefone, categoria, item, quantidade
- Mensagem adicional
- Imagem anexada como arquivo real

---

## 🐛 Troubleshooting

### Erro: "Cannot find module 'express'"

```bash
npm install express cors nodemailer dotenv
```

### Erro: "VITE_API_URL is undefined"

- Certifique-se de que `.env` existe e tem `VITE_API_URL=http://localhost:3001`

### Erro: "Authentication failed for Gmail"

- Gere nova senha de app em: https://myaccount.google.com/apppasswords
- Use a nova senha no `.env`

### Email não é recebido

- Verifique spam/lixo eletrônico
- Confirme se `EMAIL_RECIPIENT` está correto
- Verifique logs do servidor

---

## 🔐 Segurança

⚠️ **IMPORTANTE:**

- Nunca commite o arquivo `.env` com credenciais reais
- Use variáveis de ambiente em produção (Vercel, Heroku, etc.)
- Para produção, use gerenciadores de secrets

---

## 📝 Notas

- Frontend agora faz POST para `http://localhost:3001/api/send-email`
- Anexos de imagem são convertidos de base64 para Buffer antes do envio
- Suporte para múltiplos formatos de imagem (PNG, JPG, etc.)
