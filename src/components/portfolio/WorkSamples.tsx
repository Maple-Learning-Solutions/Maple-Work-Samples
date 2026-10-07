"use client";

import { SqueezeCarousel, type SqueezeSlide } from "@/components/ui/carousel-squeeze";
import { motion } from "framer-motion";

export const settings = {
    height: 400,
    gap: 16,
    slatGap: 8,
    slatWidth: 16,
    radius: 12,
    duration: 1000,
    hoverGrow: true,
    autoplay: true,
    interval: 5000,
    controls: true,
};

type DemoProps = Partial<typeof settings>;

/** A wordmark for the corner of the open panel. */
const mark = (text: string) => (
    <span className="text-sm font-medium tracking-wider text-white/90 drop-shadow-lg uppercase bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">{text}</span>
);

const slides: SqueezeSlide[] = [
    {
        id: "immersive-vr",
        title: "Immersive VR Training.",
        description:
            "Train employees in high-risk environments safely with our cutting-edge Virtual Reality simulations.",
        action: "View Sample",
        href: "/360-learning-consulting/immersive-learning",
        overlay: mark("VR/AR Solutions"),
        image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=1200",
        imageAlt: "Person wearing a VR headset looking around",
    },
    {
        id: "gamification",
        title: "Gamified Learning Experiences.",
        description:
            "Boost engagement and retention with leaderboards, badges, and interactive scenario-based learning.",
        action: "Explore Gamification",
        href: "/360-learning-consulting/gamification",
        overlay: mark("Gamification"),
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1200",
        imageAlt: "Game controller on a desk",
    },
    {
        id: "microlearning",
        title: "Microlearning Modules.",
        description:
            "Bite-sized, focused training content that fits perfectly into the flow of your team's busy workday.",
        action: "See Microlearning",
        href: "/360-learning-consulting/microlearning",
        overlay: mark("Microlearning"),
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
        imageAlt: "Person looking at a smartphone screen",
    },
    {
        id: "compliance",
        title: "Interactive Compliance Training.",
        description:
            "Turn mandatory compliance courses into engaging, scenario-driven experiences that employees actually enjoy.",
        action: "View Compliance",
        href: "/360-learning-consulting/compliance-training",
        overlay: mark("Compliance"),
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
        imageAlt: "Business people discussing a document",
    },
    {
        id: "onboarding",
        title: "Accelerated Employee Onboarding.",
        description:
            "Get new hires up to speed faster with our comprehensive digital onboarding programs.",
        action: "Discover Onboarding",
        href: "/360-learning-consulting/employee-onboarding",
        overlay: mark("Onboarding"),
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
        imageAlt: "Team collaborating in a bright modern office",
    },
    {
        id: "custom-lms",
        title: "Custom LMS Architecture.",
        description:
            "Scalable learning management systems designed from the ground up for your unique organizational needs.",
        action: "View Architecture",
        href: "/360-learning-consulting/learning-delivery",
        overlay: mark("Platform & Tech"),
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        imageAlt: "Data charts on a computer screen",
    }
];

export default function WorkSamples(props: DemoProps) {
    const options = { ...settings, ...props };

    return (
        <section id="work" className="py-12 md:py-16 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-maple-green/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-block py-1 px-3 rounded-full bg-maple-green/10 text-maple-green text-sm font-semibold tracking-wider uppercase mb-4 border border-maple-green/20">
                        Our Portfolio
                    </div>
                    <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-white mb-6">
                        Featured <span className="text-maple-green">Work Samples</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Explore how we've transformed learning experiences across various industries through innovative design and cutting-edge technology.
                    </p>
                </motion.div>
                
                <div className="w-full">
                    <SqueezeCarousel 
                        slides={slides} 
                        label="Featured Work Samples" 
                        accent="#00dc82" // user requested green
                        accentForeground="#ffffff"
                        {...options} 
                    />
                </div>
            </div>
        </section>
    );
}
