import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  height?: "sm" | "md" | "lg";
  imagePosition?: string;
  layout?: "cover" | "split" | "contain";
  children?: React.ReactNode;
}

export function PageHero({ image, eyebrow, title, subtitle, height = "md", imagePosition, layout = "cover", children }: PageHeroProps) {
  const h = height === "lg" ? "min-h-[95vh] py-36" : height === "sm" ? "min-h-[55vh] py-20" : "min-h-[90vh] py-28";

  if (layout === "split") {
    return (
      <section className={`relative ${h} overflow-hidden bg-navy-deep flex flex-col justify-center mt-[76px]`}>
        {/* Animated Background Gradients & Grid */}
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
          {/* Subtle green glow orbs */}
          <div className="absolute -top-[10%] left-[10%] h-[30rem] w-[30rem] rounded-full bg-[#1b3d1b]/40 blur-[100px]" />
          <div className="absolute right-[5%] bottom-[10%] h-[25rem] w-[25rem] rounded-full bg-[#244f24]/30 blur-[120px]" />
        </div>

        {/* Content Container (Split Grid) */}
        <div className="container-x relative z-20 mx-auto w-full max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-12 items-center">
            {/* Left side text */}
            <div className="md:col-span-7 text-left flex flex-col items-start">
              {eyebrow && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/95 px-4 py-1.5 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur-md"
                >
                  <span>☀️</span>
                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                  <span className="font-semibold uppercase tracking-widest text-[#2d6a2d]">{eyebrow}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                  <span>🌿</span>
                </motion.div>
              )}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[3.5rem]"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
              >
                {title}
              </motion.h1>
              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mt-6 text-base text-white/90 md:text-lg font-medium leading-relaxed"
                  style={{ textShadow: "0 1px 5px rgba(0,0,0,0.4)" }}
                >
                  {subtitle}
                </motion.p>
              )}
              {children && <div className="mt-8">{children}</div>}
            </div>

            {/* Right side framed image */}
            <div className="md:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[450px] aspect-square md:aspect-auto md:h-[400px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#0c180c]/40 backdrop-blur-sm p-3 group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain rounded-2xl"
                  draggable={false}
                  loading="eager"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (layout === "contain") {
    return (
      <section className={`relative ${h} overflow-hidden bg-[#0c180c] flex flex-col justify-center mt-[76px]`}>
        {/* Animated Background Gradients & Grid */}
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
          {/* Soft dark overlay on top of the image to ensure text is readable */}
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Full Screen Background Image - Contained & 100% Sharp */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full origin-center"
            >
              <img
                src={image}
                alt=""
                className={`h-full w-full opacity-100 origin-center block ${layout === "contain" ? "object-contain" : "object-cover"} ${imagePosition === "top" ? "object-top" : imagePosition === "bottom" ? "object-bottom" : imagePosition === "center" ? "object-center" : "object-[center_30%]"}`}
                draggable={false}
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="container-x relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/95 px-4 py-1.5 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur-md"
            >
              <span>☀️</span>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span className="font-semibold uppercase tracking-widest text-[#2d6a2d]">{eyebrow}</span>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span>🌿</span>
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[4rem]"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl font-medium"
              style={{ textShadow: "0 1px 5px rgba(0,0,0,0.4)" }}
            >
              {subtitle}
            </motion.p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </section>
    );
  }

  return (
    <section className={`relative ${h} overflow-hidden bg-navy-deep flex flex-col justify-center mt-[76px]`}>
      {/* Animated Background Gradients & Grid */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Soft layout overlay for text readability without blurring the background image */}
        <div className="absolute inset-0 bg-[#0c180c]/35" />
      </div>

      {/* Full Screen Background Image with Smooth Bottom Fade */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to top, transparent, black 15%)',
          WebkitMaskImage: 'linear-gradient(to top, transparent, black 15%)'
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full origin-center"
          >
            <img
              src={image}
              alt=""
              className={`h-full w-full opacity-100 origin-center block object-cover ${imagePosition === "top" ? "object-top" : imagePosition === "bottom" ? "object-bottom" : imagePosition === "center" ? "object-center" : "object-[center_30%]"}`}
              draggable={false}
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="container-x relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/95 px-4 py-1.5 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur-md"
          >
            <span>☀️</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span className="font-semibold uppercase tracking-widest text-[#2d6a2d]">{eyebrow}</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>🌿</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[4rem]"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl font-medium"
            style={{ textShadow: "0 1px 5px rgba(0,0,0,0.4)" }}
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
