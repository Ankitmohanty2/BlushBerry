const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.next')) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('d:/fullproject/tinted-store/src');
let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const regex = /^[ \t]*\{\/\*\s*[A-Z0-9\s\+\-\&\/]+\s*\*\/\}[ \t]*\r?\n?/gm;
    if (regex.test(content)) {
        content = content.replace(regex, '');
        fs.writeFileSync(file, content, 'utf8');
        count++;
    }
});
console.log(`Updated ${count} files.`);
