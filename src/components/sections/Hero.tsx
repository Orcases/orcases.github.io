import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight, Sparkles, Play } from 'lucide-react'
import { useRef, useEffect } from 'react'

// Canvas Frame Component
const CanvasFrame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawFrame()
    }

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Set up the frame style - continuous thin lines
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.3)' // Purple with transparency
      ctx.lineWidth = 1.5
      ctx.lineCap = 'square'
      ctx.lineJoin = 'miter'

      const margin = 40  // Reduced margin to bring frame closer
      const cornerSize = 25  // Smaller corner size

      // Draw continuous connected frame
      ctx.beginPath()
      
      // Start from top-left, go clockwise
      ctx.moveTo(margin + cornerSize, margin)
      ctx.lineTo(canvas.width - margin - cornerSize, margin)  // Top line
      ctx.lineTo(canvas.width - margin, margin + cornerSize)  // Top-right corner
      ctx.lineTo(canvas.width - margin, canvas.height - margin - cornerSize)  // Right line
      ctx.lineTo(canvas.width - margin - cornerSize, canvas.height - margin)  // Bottom-right corner
      ctx.lineTo(margin + cornerSize, canvas.height - margin)  // Bottom line
      ctx.lineTo(margin, canvas.height - margin - cornerSize)  // Bottom-left corner
      ctx.lineTo(margin, margin + cornerSize)  // Left line
      ctx.lineTo(margin + cornerSize, margin)  // Back to start (top-left corner)
      
      ctx.stroke()

      // Add subtle corner marks for professional camera/viewfinder look
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.2)'
      ctx.lineWidth = 1

      const markSize = 8
      const markOffset = 12

      // Top-left corner marks
      ctx.beginPath()
      ctx.moveTo(margin - markOffset, margin + cornerSize)
      ctx.lineTo(margin - markOffset + markSize, margin + cornerSize)
      ctx.moveTo(margin + cornerSize, margin - markOffset)
      ctx.lineTo(margin + cornerSize, margin - markOffset + markSize)
      ctx.stroke()

      // Top-right corner marks
      ctx.beginPath()
      ctx.moveTo(canvas.width - margin + markOffset, margin + cornerSize)
      ctx.lineTo(canvas.width - margin + markOffset - markSize, margin + cornerSize)
      ctx.moveTo(canvas.width - margin - cornerSize, margin - markOffset)
      ctx.lineTo(canvas.width - margin - cornerSize, margin - markOffset + markSize)
      ctx.stroke()

      // Bottom-left corner marks
      ctx.beginPath()
      ctx.moveTo(margin - markOffset, canvas.height - margin - cornerSize)
      ctx.lineTo(margin - markOffset + markSize, canvas.height - margin - cornerSize)
      ctx.moveTo(margin + cornerSize, canvas.height - margin + markOffset)
      ctx.lineTo(margin + cornerSize, canvas.height - margin + markOffset - markSize)
      ctx.stroke()

      // Bottom-right corner marks
      ctx.beginPath()
      ctx.moveTo(canvas.width - margin + markOffset, canvas.height - margin - cornerSize)
      ctx.lineTo(canvas.width - margin + markOffset - markSize, canvas.height - margin - cornerSize)
      ctx.moveTo(canvas.width - margin - cornerSize, canvas.height - margin + markOffset)
      ctx.lineTo(canvas.width - margin - cornerSize, canvas.height - margin + markOffset - markSize)
      ctx.stroke()
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Canvas Frame Background */}
      <CanvasFrame />
      
      {/* Static Background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-black" />
        
        {/* Static subtle background elements */}
        <div className="absolute top-32 left-32 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-32 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 px-6 py-3 rounded-md text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Creative Agency
            </div>
            
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-roboto font-black mb-8 leading-[0.85] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block font-roboto">Frame</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 font-roboto italic font-light">
                Foundry
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-open-sans font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We don't just create designs, we craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-open-sans italic font-semibold">experiences</span> that 
              captivate, inspire, and drive results. Bold creativity meets strategic thinking.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 text-white text-lg px-10 py-6 h-auto rounded-lg group shadow-2xl shadow-purple-500/25"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 text-lg px-10 py-6 h-auto rounded-lg group backdrop-blur-sm"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Creative showcase cards - NO rotating animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Brand Identity",
                subtitle: "Visual storytelling that resonates",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-500/10",
                borderColor: "border-purple-500/30"
              },
              {
                title: "Digital Experiences", 
                subtitle: "Interfaces that inspire action",
                color: "from-blue-500 to-purple-500",
                bgColor: "bg-blue-500/10",
                borderColor: "border-blue-500/30"
              },
              {
                title: "Creative Campaigns",
                subtitle: "Content that cuts through noise",
                color: "from-pink-500 to-orange-500", 
                bgColor: "bg-pink-500/10",
                borderColor: "border-pink-500/30"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className={`relative p-8 rounded-lg backdrop-blur-sm border ${item.borderColor} ${item.bgColor} group hover:scale-105 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${item.color} mb-6 flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white/20 rounded-md" />
                </div>
                <h3 className="text-xl font-roboto font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 font-open-sans">{item.subtitle}</p>
                
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" style={{ zIndex: 2 }} />
    </section>
  )
}