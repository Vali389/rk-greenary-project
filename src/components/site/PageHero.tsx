import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  height?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export function PageHero({ image, eyebrow, title, subtitle, height = "md", children }: PageHeroProps) {
  const h = height === "lg" ? "min-h-[90vh]" : height === "sm" ? "min-h-[50vh]" : "min-h-[70vh]";
  return (
    <section className={`relative ${h} flex items-center overflow-hidden`}>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/55 to-navy-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-transparent to-navy-deep/40" />
      </div>
      <div className="container-x relative z-10 py-20">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
