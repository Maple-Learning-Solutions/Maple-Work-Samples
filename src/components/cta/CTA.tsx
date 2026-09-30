"use client"

import { CtaCard } from "@/components/ui/cta-card"

export default function CTA() {
  const handleSignUp = () => {
    // Example: Redirect to mailto or handle logic
    window.location.href = `mailto:info@maplelearningsolutions.com?subject=Contact from CTA`;
  };

  return (
    <section id="contact" className="py-24 relative bg-transparent overflow-hidden px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <CtaCard
          title="Let's Create Your Next Learning Experience"
          description="Have a learning challenge in mind? Let's explore how Maple can turn it into an engaging digital experience."
          buttonText="Start a Conversation"
          inputPlaceholder="Email address"
          imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          onButtonClick={handleSignUp}
        />
      </div>
    </section>
  )
}
