# Portfólio — João Pedro (@falajotap)
Site 100% estático (Vite + GSAP). Tudo editável em **`src/config.js`**.

## Rodar / publicar
```
npm install
npm run dev        # desenvolvimento
npm run build      # gera dist/
```
**GitHub Pages:** suba para o GitHub (branch `main`) → *Settings → Pages → Source: GitHub Actions*. O workflow `.github/workflows/deploy.yml` publica sozinho a cada push. O `base` é relativo (`./`), então funciona em `usuario.github.io/repositorio`.

## Trocar imagens
1. Copie o arquivo (de preferência `.webp`) para `public/assets/images/...` (pastas já criadas: `cover, about, experience, projects, clients/<cliente>`).
2. Em `src/config.js`, preencha `src: 'clients/bolo-mania/capa.webp'` (caminho a partir de `images/`), mais `alt`, `ratio`, `pos` (enquadramento) e `fit`.
Sem `src` (ou com arquivo inexistente) aparece a arte gráfica de reserva.

## Novo cliente / projeto
- **Cliente:** copie um bloco de `clients` e crie a pasta em `public/assets/images/clients/<slug>/`.
- **Projeto (videoclipe):** descomente/copie o modelo em `projects` com `thumb` e `url` do Instagram. Sem os dois, o item fica oculto. O clique abre em nova aba; não há player embutido.

## Fontes (você precisa adicionar)
Coloque em `public/assets/fonts/`: `PirateOne-Regular.woff2`, `Blacka.woff2`, `IBMPlexMono-Regular.woff2`, `IBMPlexMono-Bold.woff2`. Para trocar, basta substituir o arquivo (ou editar o `@font-face` em `src/styles.css`). Pirate One e IBM Plex Mono são gratuitas (Google Fonts); confira a licença da Blacka.

## Silhueta da capa
`public/assets/images/textures/skyline.svg` (Vecteezy). Para mudar a cor, edite `background` em `.cover::before` no `src/styles.css`. Confira a licença do Vecteezy para uso no site.

## Links, YouTube e Políticos
- Todas as imagens podem ter `link` (abre em nova aba). Em clientes/experiências, o `url` do bloco vale para todas as imagens sem link próprio.
- Videoclipes: em `projects` cole `youtube: 'link ou ID'`; o iframe (youtube-nocookie) aparece no quadro. Sem isso, o quadro fica em "Em breve".
- A cena "Políticos" é o 5º item de `clients`; preencha `url` e coloque as imagens em `public/assets/images/clients/politicos/`.
