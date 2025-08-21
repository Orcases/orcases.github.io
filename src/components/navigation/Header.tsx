import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../ui/button'
import { LogoCreative } from '../ui/Logo'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navigation = [
  { name: 'Our Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'About', href: '#about' },
  { name: 'Insights', href: '#insights' },
  { name: 'Contact', href: '#contact' }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)']
  )
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  )

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ 
        backgroundColor: headerBackground,
        backdropFilter: backdropBlur
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="group">
            <LogoCreative />
          </a>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <span className="text-gray-300 hover:text-white transition-all duration-300 font-semibold text-lg tracking-wide relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-orange-400">
                  {item.name}
                </span>
                
                {/* Creative underline */}
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 group-hover:w-full transition-all duration-500 ease-out rounded-full" />
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 rounded-lg blur-sm transition-all duration-300 -z-10" />
              </motion.a>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 border-0 text-white px-8 py-3 rounded-full group font-semibold text-lg shadow-2xl shadow-purple-500/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Let's Create
                  <motion.span 
                    className="ml-2 text-xl"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✦
                  </motion.span>
                </span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-6 bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <nav className="space-y-4">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 font-semibold text-xl py-3 border-b border-gray-800/50 last:border-b-0"
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="pt-4"
            >
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 text-white rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </Button>
            </motion.div>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  )
}