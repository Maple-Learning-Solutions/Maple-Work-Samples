const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/Maple Edge/Downloads/nitin workspace/Maple_demo/maple-showcase/src/app/360-learning-consulting';

function getDirectories(srcPath) {
  return fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
}

const dirs = getDirectories(baseDir);

for (const dir of dirs) {
  const pagePath = path.join(baseDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Replace grid-cols strings
  content = content.replace(/className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"/g, 'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8"');
  
  content = content.replace(/className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"/g, 'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"');
  
  content = content.replace(/className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-8"/g, 'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 xl:gap-8"');
  
  content = content.replace(/className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"/g, 'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"');
  
  // AR/VR user change
  content = content.replace(/className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 md:gap-8"/g, 'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8"');

  // Also make the padding and typography inside the cards a bit more responsive so it never breaks out
  // "pt-16 pb-12 px-6 md:px-8" -> "pt-12 pb-10 px-5 xl:px-8"
  content = content.replace(/pt-16 pb-12 px-6 md:px-8/g, 'pt-14 pb-10 px-5 lg:px-6 xl:px-8');

  fs.writeFileSync(pagePath, content, 'utf8');
}

console.log("Grid classes updated for responsiveness");
