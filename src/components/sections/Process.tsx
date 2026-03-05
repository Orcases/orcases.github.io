import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight, Search, Lightbulb, Rocket, Target } from 'lucide-react'

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin by diving deep into your unique challenge or vision. Through collaborative sessions, we explore your context, background, objectives, available resources, and organizational culture. We immerse ourselves completely in understanding your brand, mission, and goals to create a comprehensive foundation for our strategic approach.",
    icon: Search,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30"
  },
  {
    number: "02", 
    title: "Research",
    description: "Armed with clear objectives, we deploy our comprehensive research methodology that continues throughout our partnership. Our 360° analytical approach combines qualitative and quantitative data collection, utilizing advanced analytics to generate actionable insights that will shape our creative strategy.",
    icon: Target,
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-blue-500/10", 
    borderColor: "border-blue-500/30"
  },
  {
    number: "03",
    title: "Development", 
    description: "We design a bespoke strategy crafted exclusively for your organization. Every solution is unique, sophisticated, and purposefully built - never templated or generic. Our data-informed, digital-first methodology, combined with years of creative expertise, culminates in a comprehensive strategic blueprint tailored to achieve your desired outcomes.",
    icon: Lightbulb,
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30"
  },
  {
    number: "04",
    title: "Implementation",
    description: "We thrive on accountability and ensure every investment drives meaningful progress. Our execution is meticulous and transparent, with obsessive attention to detail. Through continuous data tracking and monitoring, we provide ongoing visibility while constantly refining the campaign. We establish clear success metrics and innovate throughout to maximize effectiveness.",
    icon: Rocket,
    color: "from-orange-500 to-red-500", 
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30"
  }
]

export default function Process() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-pink-900/10" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Target className="w-4 h-4" />
            Creative Process
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Process</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every great creative project follows a strategic path. Our proven methodology ensures exceptional results through systematic collaboration, research, and execution.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mr-6`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-4xl font-bold text-gray-500">{step.number}</span>
                    <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual Element */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className={`relative p-12 rounded-2xl backdrop-blur-sm border ${step.borderColor} ${step.bgColor} group`}>
                  <div className="text-center">
                    <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6`}>
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mx-auto" />
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Creative Journey?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and explore how our proven process can bring your ideas to life.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 text-white text-lg px-10 py-6 h-auto rounded-full group shadow-2xl shadow-purple-500/25"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Creative Journey
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}