# DeltaPro Estética Automotiva

Landing page premium, moderna e responsiva da **DeltaPro Estética Automotiva**.

---

## 🚀 Como Publicar no Cloudflare Pages via GitHub

### Passo a Passo:

1. **Subir o repositório no GitHub**:
   - Crie um repositório no GitHub (público ou privado).
   - Faça o commit e push de todo o código deste projeto para o repositório.

2. **Conectar ao Cloudflare Pages**:
   - Acesse o painel da [Cloudflare](https://dash.cloudflare.com/).
   - Vá no menu lateral em **Workers & Pages** > **Create application** > aba **Pages** > **Connect to Git**.
   - Selecione a sua conta do GitHub e escolha o repositório `deltapro-estetica-automotiva`.

3. **Configurações de Build (Build Settings)**:
   Preencha exatamente com as opções abaixo:

   | Campo | Valor |
   |---|---|
   | **Framework preset** | `Vite` |
   | **Build command** | `npm run build` |
   | **Build output directory** | `dist` |
   | **Root directory** | `/` *(deixar vazio ou padrão)* |

4. **Variáveis de Ambiente (Opcional)**:
   - Se necessário definir a versão do Node.js, adicione a variável de ambiente:
     - `NODE_VERSION` = `20` (ou `22`)

5. **Salvar e Publicar**:
   - Clique em **Save and Deploy**.
   - Em menos de 1 minuto, o Cloudflare Pages compilará e publicará o site com SSL automático, CDN global de altíssima velocidade e suporte total a SPA.

---

## 🛠️ Tecnologias Utilizadas
- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS 4**
- **Motion (Framer Motion)** para animações fluidas
- **Lucide React** para ícones modernos
