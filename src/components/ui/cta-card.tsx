"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

// Define the props for the CtaCard component
export interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  title: string;
  description: string;
  inputPlaceholder?: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      imageSrc,
      title,
      description,
      inputPlaceholder = "Email address",
      buttonText,
      onButtonClick,
      ...props
    },
    ref
  ) => {
    const handleClick = () => {
      if (onButtonClick) {
        onButtonClick();
      }
    };

    // Animation variants for Framer Motion
    const containerVariants: any = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1,
        },
      },
    };

    const itemVariants: any = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring" as const,
          stiffness: 100,
          damping: 12,
        },
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-[20px] border border-white/5 bg-card text-card-foreground shadow-2xl",
          className
        )}
        {...props}
      >
        {/* Background Image */}
        <img
          src={imageSrc}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#040d21]/60 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d21] via-[#040d21]/90 to-transparent" />

        {/* Content */}
        <motion.div
          className="relative z-10 grid h-full grid-cols-1 items-center gap-8 p-10 md:grid-cols-2 md:p-16 lg:p-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-start text-left text-white pr-4">
            <motion.h2
              className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-[56px] leading-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-6 max-w-xl text-[17px] md:text-[19px] leading-[1.6] text-neutral-200"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>

          <motion.div className="flex w-full flex-col items-start md:items-end justify-center" variants={itemVariants}>
            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row md:justify-end">
              <Button
                onClick={handleClick}
                size="lg"
                className="h-14 px-8 rounded-full bg-maple-green text-black font-semibold hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(0,220,130,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] text-base"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }
);

CtaCard.displayName = "CtaCard";

export { CtaCard };
