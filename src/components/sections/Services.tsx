import { motion, useInView } from 'framer-motion'
import { Button } from '../ui/button'
import { Palette, Globe, Video, ArrowRight, Sparkles, Zap, Target, Package, Camera, Smartphone, Share2 } from 'lucide-react'
import { useRef } from 'react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity & Strategy',
    description: 'Transform your vision into a powerful brand that resonates deeply with your audience. Complete brand strategy from naming to visual identity systems.',
    features: ['Brand Strategy Development', 'Visual Identity Design', 'Brand Naming & Messaging', 'Brand Guidelines & Systems'],
    color: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    darkBg: 'from-purple-900/20 to-pink-900/20',
    accentColor: 'purple'
  },
  {
    icon: Globe,
    title: 'Digital Experiences',
    description: 'Craft digital products that users love and businesses thrive on. From responsive websites to mobile apps that convert and captivate.',
    features: ['Website Design & Development', 'UX/UI Design', 'E-commerce Solutions', 'CMS Implementation'],
    color: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    darkBg: 'from-blue-900/20 to-cyan-900/20',
    accentColor: 'blue'
  },
  {
    icon: Target,
    title: 'Creative Campaigns',
    description: 'Multi-channel campaigns that break through the noise. From concept to execution, we create campaigns that drive measurable results.',
    features: ['Campaign Strategy', 'Creative Advertising', 'Brand Activations', 'Integrated Marketing'],
    color: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    darkBg: 'from-green-900/20 to-emerald-900/20',
    accentColor: 'green'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that users love. From iOS to Android, we create apps that drive engagement and deliver results.',
    features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Store Optimization'],
    color: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50',
    darkBg: 'from-indigo-900/20 to-purple-900/20',
    accentColor: 'indigo'
  },
  {
    icon: Share2,
    title: 'Social Media & Content',
    description: 'Engaging social content and digital assets that build communities and drive engagement across all social platforms.',
    features: ['Social Media Design', 'Content Strategy', 'Photography Direction', 'Email Marketing Design'],
    color: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50',
    darkBg: 'from-yellow-900/20 to-orange-900/20',
    accentColor: 'yellow'
  },
  {
    icon: Zap,
    title: 'Creative Strategy & Consulting',
    description: 'Strategic creative guidance to position your brand for success. Navigate market challenges and unlock growth opportunities.',
    features: ['Creative Workshops', 'Design Thinking Sessions', 'Creative Audits', 'Innovation Labs'],
    color: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
    darkBg: 'from-cyan-900/20 to-blue-900/20',
    accentColor: 'cyan'
  }
]

const processSteps = [
  { icon: Target, title: 'Discover', description: 'Understanding your vision' },
  { icon: Sparkles, title: 'Create', description: 'Bringing ideas to life' },
  { icon: Zap, title: 'Launch', description: 'Delivering impact' }
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 px-6 py-3 rounded-full text-sm font-medium mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            Our Expertise
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            <span className="block">Services That</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              Make Waves
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            We don't just deliver projects—we create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">movements</span> that 
            transform brands and captivate audiences worldwide.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              <div className="relative h-full min-h-[500px] p-8 rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.darkBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 min-h-[64px] flex items-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300 flex-grow min-h-[120px]">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8 flex-shrink-0">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={feature} 
                        className="flex items-center text-gray-400 group-hover:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 + featureIndex * 0.1 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-4 flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <Button 
                      variant="ghost" 
                      className="text-purple-400 hover:text-purple-300 p-0 h-auto font-semibold group-hover:translate-x-2 transition-all duration-300"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-orange-500/5 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">Our Creative Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 text-white text-lg px-12 py-6 h-auto rounded-full shadow-2xl shadow-purple-500/25 group"
          >
            Start Your Creative Journey
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}