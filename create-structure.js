const fs = require('fs');
const path = require('path');

// Função para criar pastas
function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Diretório criado: ${dirPath}`);
  }
}

// Função para criar arquivos
function createFile(filePath, content = '') {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Arquivo criado: ${filePath}`);
  }
}

// Criação da estrutura de pastas e arquivos
const folders = [
  'dist/css',
  'src/assets/images',
  'src/assets/fonts',
  'src/js',
  'src/scss'
];

const files = [
  { path: 'dist/css/styles.css', content: '' },
  { path: 'dist/index.html', content: '' },
  { path: 'src/js/main.js', content: '' },
  { path: 'src/scss/_base.scss', content: '' },
  { path: 'src/scss/_layout.scss', content: '' },
  { path: 'src/scss/styles.scss', content: '' },
  { path: 'src/index.html', content: '' },
  { path: '.gitignore', content: '' },
  { path: 'README.md', content: '' }
];

// Criar pastas
folders.forEach(dir => createDir(path.join(__dirname, dir)));

// Criar arquivos
files.forEach(file => createFile(path.join(__dirname, file.path), file.content));

console.log('Estrutura de pastas e arquivos criada com sucesso!');
