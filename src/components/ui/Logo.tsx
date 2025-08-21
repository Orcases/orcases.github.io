import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  showText?: boolean
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Logo Mark */}
      <div className="relative group">
        {/* Main logo container */}
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
          {/* Letter F with creative styling */}
          <div className="relative">
            <span className="text-white font-black text-xl leading-none select-none">
              F
            </span>
            {/* Small accent dot */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/40 rounded-full" />
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-orange-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        
        {/* Background shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl -rotate-3 -z-20" />
      </div>
      
      {/* Typographic Brand Name */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-white font-black text-xl tracking-tight">
            Frame
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 font-black text-xl tracking-tight -mt-1">
            Foundry
          </span>
        </div>
      )}
    </motion.div>
  )
}

// Alternative compact logo for smaller spaces
export function LogoCompact({ className = '' }: { className?: string }) {
  return (
    <motion.div 
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-black text-lg">F</span>
      </div>
      <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/40 to-orange-500/40 rounded-lg blur opacity-75 -z-10" />
    </motion.div>
  )
}

// Logo with creative text styling
export function LogoCreative({ className = '' }: { className?: string }) {
  return (
    <motion.div 
      className={`flex items-center space-x-2 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <div className="w-11 h-11 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center transform rotate-2">
          <span className="text-white font-black text-lg">F</span>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/40 to-orange-500/40 rounded-xl blur opacity-60 -z-10" />
      </div>
      
      <div className="font-black text-xl">
        <span className="text-white">Frame</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 ml-1">
          Foundry
        </span>
      </div>
    </motion.div>
  )
}