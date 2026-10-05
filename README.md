# DeltaPro Estética Automotiva

Landing page premium, moderna e responsiva da **DeltaPro Estética Automotiva**.

---

## 🚀 Como Publicar no Cloudflare Pages via GitHub

### Configurações de Build no Cloudflare:

| Campo | Valor |
|---|---|
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` *(ou deixe em branco)* |

O roteamento de SPA (Single Page Application) é tratado nativamente pelo Cloudflare Wrangler através de `"not_found_handling": "single-page-application"`, sem necessidade de regras manuais de redirecionamento que possam causar loop.

---

## 🛠️ Tecnologias Utilizadas
- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS 4**
- **Motion (Framer Motion)** para animações fluidas
- **Lucide React** para ícones modernos
