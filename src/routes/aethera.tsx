import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/aethera")({
  component: AetheraPage,
  head: () => ({
    meta: [
      { title: "Aethera® — Beyond silence, we build the eternal." },
      { name: "description", content: "Building platforms for brilliant minds, fearless makers, and thoughtful souls." },
    ],
  }),
});

function AetheraPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const checkTime = () => {
      if (video.duration) {
        const currentTime = video.currentTime;
        const duration = video.duration;

        // Fade in over 0.5s at the start (opacity 0 to 1)
        if (currentTime < 0.5) {
          setOpacity(currentTime / 0.5);
        }
        // Fade out over 0.5s before the end (opacity 1 to 0)
        else if (currentTime > duration - 0.5) {
          const remaining = duration - currentTime;
          setOpacity(Math.max(0, remaining / 0.5));
        }
        // Middle state: fully visible
        else {
          setOpacity(1);
        }
      }
      rafId = requestAnimationFrame(checkTime);
    };

    const handlePlay = () => {
      rafId = requestAnimationFrame(checkTime);
    };

    const handlePause = () => {
      cancelAnimationFrame(rafId);
    };

    const handleEnded = () => {
      cancelAnimationFrame(rafId);
      // On ended event: set opacity to 0, wait 100ms, reset currentTime = 0, then play() again
      setOpacity(0);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch((err) => console.log("Video replay prevented:", err));
        }
      }, 100);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    // Initial trigger to play
    video.play().catch((err) => {
      console.log("Autoplay blocked, waiting for interaction:", err);
    });

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div 
      className="relative min-h-screen w-full overflow-hidden bg-[#FFFFFF]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Video Layer */}
      <div 
        className="pointer-events-none absolute z-0"
        style={{
          top: "300px",
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
        }}
      >
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          className="h-full w-full object-cover transition-opacity duration-100"
          style={{ opacity }}
          muted
          playsInline
          preload="auto"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-transparent to-[#FFFFFF] pointer-events-none" />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-3xl tracking-tight text-[#000000] select-none"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Aethera<sup>®</sup>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-[#000000] transition-colors">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-[#6F6F6F] hover:text-[#000000] transition-colors">
            Studio
          </a>
          <a href="#" className="text-sm font-medium text-[#6F6F6F] hover:text-[#000000] transition-colors">
            About
          </a>
          <a href="#" className="text-sm font-medium text-[#6F6F6F] hover:text-[#000000] transition-colors">
            Journal
          </a>
          <a href="#" className="text-sm font-medium text-[#6F6F6F] hover:text-[#000000] transition-colors">
            Reach Us
          </a>
        </div>

        {/* CTA Button */}
        <div>
          <button className="rounded-full px-6 py-2.5 text-sm font-medium bg-[#000000] text-[#FFFFFF] transition-all hover:scale-[1.03] active:scale-[0.98]">
            Begin Journey
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: "calc(8rem - 75px)", paddingBottom: "10rem" }}
      >
        {/* Headline */}
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal leading-[0.95] tracking-[-2.46px] text-[#000000] animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Beyond <span className="italic text-[#6F6F6F]">silence,</span> we build <span className="italic text-[#6F6F6F]">the eternal.</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] animate-fade-rise-delay">
          Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows.
        </p>

        {/* Hero CTA Button */}
        <button className="rounded-full px-14 py-5 text-base font-semibold bg-[#000000] text-[#FFFFFF] mt-12 transition-all hover:scale-[1.03] active:scale-[0.98] animate-fade-rise-delay-2 shadow-lg hover:shadow-black/5">
          Begin Journey
        </button>
      </section>
    </div>
  );
}
