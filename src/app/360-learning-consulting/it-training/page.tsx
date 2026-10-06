"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ArrowRight, ShieldCheck, Plus, Minus } from "lucide-react"
import { CtaCard } from "@/components/ui/cta-card"
import SampleCard from "@/components/portfolio/SampleCard"
import SampleViewer from "@/components/portfolio/SampleViewer"
import { samples } from "@/data/samples"
import ServiceSamplesCarousel from "@/components/portfolio/ServiceSamplesCarousel"
import WhyMapleAccordion from "@/components/sections/WhyMapleAccordion";

export default function ItTrainingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [selectedSample, setSelectedSample] = useState<any | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  // Find relevant samples
  const relevantSamples = samples // TODO: Filter specific samples per page using sample.id

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-maple-green/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop)" }}
          />
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.8)_0%,rgba(2,6,23,0)_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-maple-green text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md border border-white/10">
                360° Learning Consulting
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              IT & Technical Training
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed"
            >
              Bridge the gap between technology and the business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="#samples" 
                className="px-8 py-4 bg-maple-green text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all text-center"
              >
                Explore Our Work
              </Link>
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 text-center"
              >
                Let's Talk
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What is IT & Technical Training?
              </h2>
              <div className="w-20 h-1 bg-maple-green mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Maple translates complex IT concepts into practical business training. Whether you are rolling out new cybersecurity protocols, upskilling developers, or teaching non-technical staff how to use advanced data tools, we make the highly technical highly accessible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Workforce Section */}
      <section id="workforce" className="py-24 relative z-10 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wider"
            >
              BUILD <span className="text-slate-400 font-light lowercase">a Future-Ready Workforce with</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "CONSULTING AND NEEDS ANALYSIS",
                desc: "Our team conducts a thorough needs analysis to identify your organization’s most critical IT training areas, designing a roadmap that aligns with your strategic goals.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80"
              },
              {
                num: "02",
                title: "CUSTOM IT TRAINING DEVELOPMENT",
                desc: "We create training modules tailored to your business’s unique requirements, incorporating specific tools, systems, and compliance needs.",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=300&q=80"
              },
              {
                num: "03",
                title: "CONTINUOUS LEARNING AND UPDATES",
                desc: "With technology evolving rapidly, we offer ongoing updates and support to keep your training materials current and effective.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
              },
              {
                num: "04",
                title: "FLEXIBLE LEARNING FORMATS",
                desc: "Our courses are available in multiple formats, including microlearning, simulations, and instructor-led training, making integrating training into any work environment easy.",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=300&q=80"
              },
              {
                num: "05",
                title: "DATA PROTECTION AND PRIVACY TRAINING",
                desc: "Develop a secure data culture with foundational courses on data protection, privacy regulations, and best practices to secure sensitive information.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=300&q=80"
              },
              {
                num: "06",
                title: "TECHNICAL SKILLS AND SOFTWARE TRAINING",
                desc: "We provide targeted training on specialized IT tools, software applications, and technical processes relevant to your business operations.",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&q=80"
              },
              {
                num: "07",
                title: "CYBERSECURITY AWARENESS PROGRAMS",
                desc: "Equip your team with essential skills to safeguard against phishing, malware, and social engineering threats. Courses include practical, scenario-based training for a proactive approach to security.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&q=80"
              },
              {
                num: "08",
                title: "SEO AND DIGITAL MARKETING FUNDAMENTALS",
                desc: "Boost your online visibility with courses on SEO, digital marketing strategies, and technical optimization techniques to enhance website traffic and engagement.",
                image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=300&q=80"
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-maple-green/10 hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
              >
                {/* Image Area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-maple-green font-mono text-sm font-bold shadow-lg">
                    .{benefit.num}
                  </div>
                  <img 
                    src={benefit.image} 
                    alt={benefit.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow relative bg-slate-900">
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-maple-green transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed flex-grow text-sm md:text-[15px]">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Process */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {[{"title":"ANALYZE AND ASSESS","desc":"We start by measuring your organization's current performance metrics, establishing a clear baseline that guides our journey forward."},{"title":"UNCOVER OPPORTUNITIES","desc":"Through benchmark analysis and performance mapping, we identify key areas where your organization can maximize its potential."},{"title":"DESIGN STRATEGIC SOLUTIONS","desc":"Our experts collaborate with your team to develop targeted solutions that address root causes and align with your business objectives."},{"title":"DRIVE AND MEASURE IMPACT","desc":"We implement solutions and track progress through data-driven metrics, ensuring measurable improvements and sustainable results."}].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-transparent border border-white/20 pt-20 pb-16 px-6 xl:px-10 flex flex-col h-full hover:border-maple-green/50 transition-colors duration-300"
              >
                {/* Number Tab */}
                <div className="absolute top-0 left-0 bg-maple-green text-black font-bold text-lg px-4 py-2">
                  .{String(idx + 1).padStart(2, '0')}
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white uppercase text-center mb-8 tracking-wide leading-tight">
                  {step.title}
                </h3>
                
                <div className="flex justify-center mb-8">
                  <div className="w-8 h-[2px] bg-maple-green opacity-80"></div>
                </div>
                
                <p className="text-slate-400 text-sm md:text-base font-light text-center leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 relative z-10 bg-slate-900/30">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Key Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              What we deliver for IT & Technical Training
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-slate-950/50 border border-white/10 p-8 rounded-2xl hover:border-maple-green/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maple-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4 relative z-10">
                <CheckCircle2 className="text-maple-green w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Cybersecurity Awareness</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Engaging, scenario-based training that teaches employees how to identify phishing, social engineering, and data risks.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-950/50 border border-white/10 p-8 rounded-2xl hover:border-maple-green/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maple-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4 relative z-10">
                <CheckCircle2 className="text-maple-green w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Developer Bootcamps</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Intensive, hands-on curricula to upskill your engineering teams on new languages, frameworks, or cloud architectures.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-950/50 border border-white/10 p-8 rounded-2xl hover:border-maple-green/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maple-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4 relative z-10">
                <CheckCircle2 className="text-maple-green w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Data Literacy</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Training business analysts and managers how to interpret dashboards, query databases, and make data-driven decisions.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.30000000000000004 }}
              className="bg-slate-950/50 border border-white/10 p-8 rounded-2xl hover:border-maple-green/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maple-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4 relative z-10">
                <CheckCircle2 className="text-maple-green w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">IT Process Documentation</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Creating clear, visual SOPs for IT service desks, incident response, and change management.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Why Maple */}
      <WhyMapleAccordion subtitle="Expertise, technology, and learning experiences built around your It Training goals." items={[{"title":"Strategic Planning Expertise","desc":"We combine deep instructional design knowledge with industry best practices to create It Training strategies that align perfectly with your organizational objectives.","image":"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"},{"title":"Data-Driven Insights","desc":"Our solutions are never based on guesswork. We utilize continuous performance mapping and learner analytics to adapt and refine our approach for maximum impact.","image":"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"},{"title":"Proven Industry Experience","desc":"Benefit from extensive consulting expertise across diverse sectors, helping organizations overcome complex challenges with greater confidence and clarity.","image":"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"},{"title":"Results-Focused Approach","desc":"We don't just deliver training; we deliver behavioral change. Our focus remains entirely on tracking progress and ensuring measurable, sustainable business results.","image":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"}]} />

      
      {/* Use Cases */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Where It Applies
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h-1 bg-maple-green"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 hover:bg-slate-900 hover:border-white/20 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-maple-green opacity-0 -ml-7 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Security Compliance Rollouts
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Mandatory annual security training that satisfies auditors without putting employees to sleep.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 hover:bg-slate-900 hover:border-white/20 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-maple-green opacity-0 -ml-7 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Cloud Migration
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Upskilling the IT infrastructure team as the company transitions from on-premise servers to AWS or Azure.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 hover:bg-slate-900 hover:border-white/20 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-maple-green opacity-0 -ml-7 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Agile Transformation
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Training product and engineering teams on Scrum methodologies, Jira workflows, and CI/CD pipelines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* FAQs */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="space-y-4">
            {[{"question":"Do you have off-the-shelf cybersecurity courses?","answer":"We have foundational frameworks, but we highly recommend customizing the scenarios to feature your actual IT systems, phishing examples, and reporting protocols."},{"question":"Can you train our developers on proprietary internal codebases?","answer":"Yes. After signing necessary NDAs, we work with your senior engineers to document and create training around your custom tech stack."},{"question":"How do you keep the training updated when IT systems change?","answer":"We use a subscription-style maintenance model for IT training, ensuring that when a system updates, the corresponding training is updated immediately."}].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm ${
                  openFaqIndex === index 
                    ? "bg-slate-900/80 border-maple-green/50 shadow-lg shadow-maple-green/10" 
                    : "bg-slate-900/40 border-white/10 hover:bg-slate-900/60 hover:border-white/30"
                }`}
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-maple-green"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                  <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${openFaqIndex === index ? 'bg-maple-green text-black' : 'bg-white/10 text-slate-300'}`}>
                    {openFaqIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-300 font-light leading-relaxed border-t border-white/10 pt-4 mt-2 mx-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative bg-transparent overflow-hidden px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <CtaCard
            title="Ready to Create Better IT & Technical Training?"
            description="Let's design a learning solution that combines meaningful learning, engaging experiences, and the right technology for your organization."
            buttonText="Talk to Maple"
            inputPlaceholder="Email address"
            imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            onButtonClick={() => {
              window.location.href = "mailto:info@maplelearningsolutions.com?subject=Inquiry: IT & Technical Training";
            }}
          />
        </div>
      </section>
    </div>
  )
}
