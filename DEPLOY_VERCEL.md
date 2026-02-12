# Deploy MyFortune to Vercel

Your code is already on GitHub: **https://github.com/santhu587/Myfortune4u**

## Deploy in 3 steps

### 1. Open Vercel
Go to **https://vercel.com** and sign in with your **GitHub** account.

### 2. Import the project
- Click **“Add New…”** → **“Project”**
- Find **Myfortune4u** in the list (or paste `santhu587/Myfortune4u` if you need to search)
- Click **Import**

### 3. Deploy
- Leave the default settings (Vercel detects Vite automatically):
  - **Build Command:** `npm run build`
  - **Output Directory:** `dist`
- Click **Deploy**
- Wait 1–2 minutes. You’ll get a live URL like **https://myfortune4u.vercel.app**

Every new push to the `main` branch on GitHub will trigger a new deployment automatically.

---

## Optional: Deploy from your terminal

If you prefer the CLI:

```bash
# Log in to Vercel (opens browser once)
npx vercel login

# Deploy (preview)
npx vercel

# Deploy to production
npx vercel --prod
```

Follow the prompts to link this folder to your Vercel project (or create a new one).
