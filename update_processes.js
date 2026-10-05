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

  // Find Process section
  const processStartIdx = content.indexOf('{/* Process */}');
  if (processStartIdx === -1) {
    console.log(`Skipping ${dir}: {/* Process */} not found`);
    continue;
  }

  // Find the end of Process section
  // It ends at the next section marker or end of component
  let nextSectionIdx = content.indexOf('{/*', processStartIdx + 10);
  if (nextSectionIdx === -1) {
    nextSectionIdx = content.lastIndexOf('</section>') + 10;
  }
  
  const processSectionContent = content.substring(processStartIdx, nextSectionIdx);
  
  // Extract steps using regex
  const steps = [];
  const stepRegex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = stepRegex.exec(processSectionContent)) !== null) {
    const title = match[1].trim().replace(/\n/g, ' ').replace(/\s{2,}/g, ' ');
    const desc = match[2].trim().replace(/\n/g, ' ').replace(/\s{2,}/g, ' ');
    // Skip if it's not a real step (e.g. if we accidentally matched something else, though unlikely)
    if (title && desc) {
      steps.push({ title, desc });
    }
  }

  if (steps.length === 0) {
    console.log(`Skipping ${dir}: No steps found`);
    continue;
  }
  
  // Also we should ensure we get exactly the <section>...</section> of the process part.
  const sectionEndRegex = /<\/section>/g;
  let sectionEndMatch;
  let lastSectionEnd = processStartIdx;
  while ((sectionEndMatch = sectionEndRegex.exec(content)) !== null) {
      if (sectionEndMatch.index > processStartIdx) {
          lastSectionEnd = sectionEndMatch.index + 10;
          break; // First section closing after start
      }
  }
  
  const exactSectionText = content.substring(processStartIdx, lastSectionEnd);

  const gridClass = steps.length === 6 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" : 
                    steps.length === 5 ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-5" :
                    steps.length === 4 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" :
                    "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  // Generate new Process component
  const newProcessComponent = `{/* Process */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-[#030712]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 justify-center md:justify-start"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider">
                OUR PROCESS
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 font-light pb-1 md:pb-2">
                From insight to measurable transformation
              </p>
            </motion.div>
          </div>

          <div className="grid ${gridClass} gap-6 md:gap-8">
            {${JSON.stringify(steps)}.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-transparent border border-white/20 pt-16 pb-12 px-6 md:px-8 flex flex-col h-full hover:border-maple-green/50 transition-colors duration-300"
              >
                {/* Number Tab */}
                <div className="absolute top-0 left-0 bg-maple-green text-black font-bold text-lg px-4 py-2">
                  .{String(idx + 1).padStart(2, '0')}
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white uppercase text-center mb-6 tracking-wide leading-tight">
                  {step.title}
                </h3>
                
                <div className="flex justify-center mb-6">
                  <div className="w-8 h-[2px] bg-maple-green opacity-80"></div>
                </div>
                
                <p className="text-slate-400 text-sm md:text-base font-light text-center leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>`;

  content = content.substring(0, processStartIdx) + newProcessComponent + content.substring(lastSectionEnd);
  
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`Updated ${dir}`);
}

console.log("All done");
