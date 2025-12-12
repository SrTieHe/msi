# 🚀 Deploy - Comandos Finais

## ✅ Arquivos Corrigidos

Todos os arquivos TypeScript e configurações foram criados/corrigidos:
- ✅ index.html
- ✅ tsconfig.json
- ✅ vite.config.ts
- ✅ src/main.tsx
- ✅ .gitignore
- ✅ package.json (atualizado)

## 📦 1. Instalar Dependências

```bash
npm install
```

## 🧪 2. Testar Localmente

```bash
npm run dev
```

Acesse: http://localhost:5173

## 📤 3. Subir para GitHub

```bash
git init
git add .
git commit -m "MOSA Intelligence - Landing Page"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/mosa-intelligence-website.git
git push -u origin main
```

**Quando pedir senha:** Use Personal Access Token do GitHub

## 🌐 4. Deploy na Vercel

1. Acesse: https://vercel.com
2. Login com GitHub
3. "Import Project"
4. Selecione: `mosa-intelligence-website`
5. Clique "Deploy"

**A Vercel detecta tudo automaticamente!**

## 🔗 5. Configurar Domínio

Na Vercel → Settings → Domains:
- Adicione: `mosaintelligence.com.br`
- Adicione: `www.mosaintelligence.com.br`

No Registro.br:
- Tipo A: `@` → IP da Vercel
- Tipo CNAME: `www` → `cname.vercel-dns.com`

## ✅ Pronto!

Seu site estará em: https://mosaintelligence.com.br

---

## ❌ Problemas?

### Build falha na Vercel
```bash
# Teste localmente primeiro:
npm run build
```

Se der erro local, me avise!

### Git push falha
Use Personal Access Token como senha (não sua senha do GitHub).

Criar token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token → Marque "repo"
