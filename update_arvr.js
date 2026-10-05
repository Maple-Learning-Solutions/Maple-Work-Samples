const fs = require('fs');

const pagePath = 'c:/Users/Maple Edge/Downloads/nitin workspace/Maple_demo/maple-showcase/src/app/360-learning-consulting/ar-vr-training/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

const processStartIdx = content.indexOf('{/* Process */}');
const processEndIdx = content.indexOf('</section>', processStartIdx) + 10;

const steps = [
  {
    title: "Feasibility & Hardware",
    desc: "Determine if VR/AR is actually the right solution and select the appropriate deployment hardware."
  },
  {
    title: "3D Asset Creation",
    desc: "Model the physical environment in Unity/Unreal or capture it using specialized 360-degree camera rigs."
  },
  {
    title: "Interaction Programming",
    desc: "Code the physics, object interactions, and user interface within the virtual environment."
  },
  {
    title: "Beta Testing",
    desc: "Test for motion sickness, intuitive controls, and learning effectiveness with a pilot group."
  },
  {
    title: "Deployment & MDM",
    desc: "Assist with Mobile Device Management (MDM) to securely deploy the app to your fleet of headsets."
  }
];

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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
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

content = content.substring(0, processStartIdx) + newProcessComponent + content.substring(processEndIdx);
fs.writeFileSync(pagePath, content, 'utf8');
console.log('Done AR/VR');
