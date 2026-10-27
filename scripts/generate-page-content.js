const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'src', 'content', 'pageContent.html');
const outputPath = path.join(__dirname, '..', 'src', 'content', 'pageContent.ts');

let html = fs.readFileSync(inputPath, 'utf-8');
html = html.replace(/^\s*<div class="my-app">\s*/, '').replace(/\s*<\/div>\s*$/, '');

const content = `// Auto-generated from src/content/pageContent.html - DO NOT EDIT DIRECTLY
export const pageContent: string = ${JSON.stringify(html)};
`;

fs.writeFileSync(outputPath, content, 'utf-8');
console.log('Successfully generated', outputPath);
