import { useRef, useEffect } from 'react'

interface ContinuousFrameProps {
  className?: string
  margin?: number
  cornerSize?: number
  opacity?: number
  zIndex?: number
}

export const ContinuousFrame = ({ 
  className = "", 
  margin = 20, 
  cornerSize = 25, 
  opacity = 0.3,
  zIndex = 1 
}: ContinuousFrameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      
      canvas.width = rect.width
      canvas.height = rect.height
      drawFrame()
    }

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Set up the frame style - continuous thin lines
      ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`
      ctx.lineWidth = 1.5
      ctx.lineCap = 'square'
      ctx.lineJoin = 'miter'

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
      ctx.strokeStyle = `rgba(147, 51, 234, ${opacity * 0.7})`
      ctx.lineWidth = 1

      const markSize = 6
      const markOffset = 8

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
    
    const resizeObserver = new ResizeObserver(resizeCanvas)
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [margin, cornerSize, opacity])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex }}
    />
  )
}