import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const galleryImages = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/kl-towers_fb1bc7d3.jpg",
    label: "Petronas Towers",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/langkawi-beach_5d07ae11.jpg",
    label: "Langkawi Beach",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/penang-arches_e78907eb.jpg",
    label: "Penang Heritage",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/batu-caves_064fb6ef.webp",
    label: "Batu Caves",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/mount-kinabalu_51d31968.jpg",
    label: "Mount Kinabalu",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/cameron-highlands_dac2a51a.jpg",
    label: "Cameron Highlands",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/tioman_8c8b5aea.jpg",
    label: "Tioman Island",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663456289586/b2wsMhGPBxQ6akaTvAhxPT/malacca_9e74f4eb.jpg",
    label: "Malacca",
    span: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] to-[#0d1428]" />

      <div className="relative container">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[#a78bfa] mb-4"
          >
            <Camera className="w-4 h-4" />
            Photo Gallery
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Malaysia Through the{" "}
            <span className="font-display italic text-gradient">Lens</span>
          </motion.h2>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-3 gap-3 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-semibold text-sm">{img.label}</span>
              </div>
              {/* Glass overlay on hover */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
