import React from 'react'
import { motion } from 'framer-motion'

function NavLink({ label }) {
  return (
    <motion.div
      className="py-2 px-1"
      rel="nofollow noreferrer"
      transition={{ easeInOut: [0.17, 0.67, 0.83, 0.67] }}
      whileHover={{ opacity: 0.48 }}
    >
      <span className="text-[0.875rem] leading-none">{label}</span>
    </motion.div>
  )
}

export default NavLink
