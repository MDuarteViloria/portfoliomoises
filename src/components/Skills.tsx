import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../contexts/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'React', level: 85, category: 'Frontend', icon: '⚛️' },
    { name: 'Next.js', level: 70, category: 'Frontend', icon: '🔺' },
    { name: 'TypeScript', level: 80, category: 'Language', icon: '📘' },
    { name: 'JavaScript', level: 90, category: 'Language', icon: '📜' },
    { name: 'Node.js', level: 85, category: 'Backend', icon: '🟢' },
    { name: 'Tailwind CSS', level: 90, category: 'Styling', icon: '🎨' },
    { name: 'SQL Server', level: 75, category: 'Database', icon: '🗄️' },
    { name: 'SQLite', level: 70, category: 'Database', icon: '💾' },
    { name: 'GitHub', level: 80, category: 'Tools', icon: '🐙' },
    { name: 'MongoDB', level: 65, category: 'Database', icon: '🍃' },
  ]

  const categories = [...new Set(skills.map(skill => skill.category))]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const getLevelText = (level: number) => {
    if (level >= 85) return t.skills.levels.expert
    if (level >= 70) return t.skills.levels.advanced
    if (level >= 50) return t.skills.levels.intermediate
    return t.skills.levels.beginner
  }

  const getLevelColor = (level: number) => {
    if (level >= 85) return 'from-green-400 to-green-600'
    if (level >= 70) return 'from-blue-400 to-blue-600'
    if (level >= 50) return 'from-yellow-400 to-yellow-600'
    return 'from-red-400 to-red-600'
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4"
          >
            {t.skills.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            {t.skills.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <h4 className="font-semibold text-lg">{skill.name}</h4>
                        </div>
                        <span className="text-sm text-text-secondary">
                          {getLevelText(skill.level)}
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-surface rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                        <span className="absolute right-0 -top-6 text-sm font-bold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills