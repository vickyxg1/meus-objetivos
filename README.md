# Meus Objetivos

Projeto front-end com **HTML**, **JavaScript Vanilla** e **SASS (SCSS)**, usando convenção **BEM** para organização de classes.

O app exibe uma lista de objetivos e um contador regressivo para cada um deles.

## 🚀 Tecnologias

- HTML5
- JavaScript (Vanilla)
- SASS/SCSS
- BEM (Block Element Modifier)
- Node.js + npm (scripts de build/dev)

## 📁 Estrutura

```bash
.
├── dist/
│   ├── css/
│   ├── js/
│   └── index.html
├── src/
│   ├── index.html
│   ├── js/
│   │   └── main.js
│   └── scss/
│       ├── base/
│       │   └── _reset.scss
│       ├── components/
│       │   ├── _box.scss
│       │   ├── _container.scss
│       │   ├── _countdown.scss
│       │   ├── _header.scss
│       │   └── _menu.scss
│       └── styles.scss
├── create-structure.js
└── package.json
```

## ⚙️ Instalação

```bash
npm install
```

## ▶️ Scripts disponíveis

### `npm run sass`

Compila SCSS em modo watch:

```bash
src/scss/styles.scss -> dist/css/styles.css
```

### `npm run build`

Gera os arquivos de build:

- compila `styles.scss` para `dist/css/styles.css`
- copia `src/index.html` para `dist/index.html`
- copia `src/js/main.js` para `dist/js/main.js`

### `npm start`

Executa `build` e sobe o projeto com `live-server` em `dist`.

## 🧠 Como personalizar

### Alterar textos dos objetivos

- Edite os itens do menu em `src/index.html`
- Edite os títulos dos blocos `.countdown` no mesmo arquivo

### Alterar datas dos contadores

- Edite o array `targetDates` em `src/js/main.js`

Exemplo de formato:

```js
new Date("November 3, 2026 13:30:00 GMT-0300").getTime();
```

## 📌 Observações

- O projeto está estruturado para estilo em `src/scss` e saída em `dist/css`.
- O JavaScript fonte fica em `src/js/main.js` e é copiado para `dist/js/main.js` durante o build.

## 👩‍💻 Autora

Feito por **Vicky**.
