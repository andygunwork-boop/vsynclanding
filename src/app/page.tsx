"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Upload, Share2, Zap } from "lucide-react";

const features = [
  {
    label: "Загрузи видео",
    description: "Один бот — все платформы. Без лишних вкладок.",
    icon: Upload,
    delay: 0.1,
  },
  {
    label: "AI трансформация",
    description: "Нейросеть создаёт обложки, описание и теги к роликам.",
    icon: Sparkles,
    delay: 0.2,
  },
  {
    label: "Мультипубликация",
    description: "YouTube, Telegram, VK, Дзен — одной кнопкой.",
    icon: Share2,
    delay: 0.3,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden bg-grid">
      {/* Ambient gradients */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[120%] max-w-4xl h-[80vh] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_right,rgba(167,139,250,0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center px-5 pt-2 pb-6 sm:pt-4 sm:pb-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center justify-center gap-5 max-w-2xl mx-auto text-center"
          >
            <motion.a
              href="https://t.me/vpublish_bot"
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="hero-logo-link relative inline-block bg-transparent outline-none"
            >
              <Image
                src="/SyncCoube.svg"
                alt="vPublish 2026 — открыть в Telegram"
                width={480}
                height={480}
                priority
                className="w-80 h-80 sm:w-[28rem] sm:h-[28rem] drop-shadow-[0_0_24px_rgba(56,189,248,0.5)] hover:drop-shadow-[0_0_36px_rgba(56,189,248,0.7)] transition-[filter]"
              />
            </motion.a>
            <p className="font-hero-bg text-[clamp(1.5rem,6vw,2.5rem)] font-medium tracking-tight text-slate-400/90">
              Публикация видео в соцсети
            </p>
          </motion.div>
        </section>

        {/* Features */}
        <section className="px-5 pb-20 sm:pb-28">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {features.map(({ label, description, icon: Icon, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-6 sm:p-7 flex flex-col gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-sky-500/15 flex items-center justify-center text-[var(--accent)]">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-lg mb-1">
                      {label}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <a
              href="https://t.me/vpublish_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 px-8 py-4 font-display font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.4)] transition hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] hover:from-sky-400 hover:to-sky-500"
            >
              <Zap className="w-5 h-5" />
              Запустить бота
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="mt-auto py-6 px-5 border-t border-[var(--border-subtle)]">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-display text-sm text-slate-500">
              vPublish 2026
            </span>
            <a
              href="https://t.me/vpublish_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400/90 hover:text-sky-300 text-sm transition"
            >
              t.me/vpublish_bot
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
