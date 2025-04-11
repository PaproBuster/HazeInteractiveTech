"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ComingSoonPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
    

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(75, 0, 130, 0.5), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="container relative z-20 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Coming Soon
        </motion.h1>

        <motion.p
          className="mb-8 max-w-md text-lg text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Thank You for patience
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="https://discord.gg/your-server-id" target="_blank" rel="noopener noreferrer">
            <Button className="bg-indigo-600 px-6 py-6 text-lg font-medium hover:bg-indigo-700">
              Join our community server
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 z-20 text-sm text-gray-500">© {new Date().getFullYear()} Your Company Name</div>
    </div>
  )
}
