"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import * as React from "react"

export default function LogoAnimation({ setIsMobileMenuOpen }: any) {
  const { scrollY } = useScroll()

  // Text erase animation
  const textWidth = useTransform(scrollY, [0, 150], ["100%", "0%"])

  // Dot animations
  const dotScale = useTransform(scrollY, [0, 180], [1, 4])
  const dotX = useTransform(scrollY, [0, 180], [0, -25]) // fixed range
  const dotY = useTransform(scrollY, [0, 180], [0, 0]) // move upward
  const dotZ = useTransform(scrollY, [0, 0], [0, 200])
  const dotRotate = useTransform(scrollY, [0, 180], [0, 8])

  return (
    <div
      className="md:flex md:items-center md:gap-12"
      style={{ perspective: 1000 }}
    >
      <a
        className="block text-2xl font-bold text-[#BBF451] flex items-center"
        href="#home"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Erasing Text */}
        <motion.span
          style={{ width: textWidth }}
          className="overflow-hidden whitespace-nowrap"
        >
          AMIN H
        </motion.span>

        {/* Animated Dot */}
        <motion.span
          style={{
            scale: dotScale,
            x: dotX,
            y: dotY,
            z: dotZ,
            rotateZ: dotRotate,
          }}
          className="font-extrabold text-2xl inline-block origin-bottom"
        >
          .
        </motion.span>
      </a>
    </div>
  )
}