import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Palette, Globe } from 'lucide-react'
import { useLanguage, languages } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showThemes, setShowThemes] = useState(false)
  const [showLanguages, setShowLanguages] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme, themes } = useTheme()

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-display font-bold text-xl gradient-text"
          >
            MD
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Selector */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowThemes(!showThemes)}
                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors duration-300"
              >
                <Palette className="w-5 h-5" />
              </motion.button>

              <AnimatePresence>
                {showThemes && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-12 right-0 glass rounded-lg p-2 min-w-[200px]"
                  >
                    {themes.map((themeOption) => (
                      <motion.button
                        key={themeOption.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => {
                          setTheme(themeOption)
                          setShowThemes(false)
                        }}
                        className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors duration-300 ${
                          theme.id === themeOption.id
                            ? 'bg-primary/20 text-primary'
                            : 'hover:bg-white/10'
                        }`}
                      >
                        <div className="flex space-x-1">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: themeOption.colors.primary }}
                          />
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: themeOption.colors.secondary }}
                          />
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: themeOption.colors.accent }}
                          />
                        </div>
                        <span className="text-sm font-medium">{themeOption.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLanguages(!showLanguages)}
                className="flex items-center space-x-2 p-2 rounded-lg glass hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-lg">{language.flag}</span>
                <Globe className="w-4 h-4" />
              </motion.button>

              <AnimatePresence>
                {showLanguages && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-12 right-0 glass rounded-lg p-2 min-w-[120px]"
                  >
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => {
                          setLanguage(lang)
                          setShowLanguages(false)
                        }}
                        className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors duration-300 ${
                          language.code === lang.code
                            ? 'bg-primary/20 text-primary'
                            : 'hover:bg-white/10'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                  className="block text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex space-x-2">
                  {themes.slice(0, 3).map((themeOption) => (
                    <motion.button
                      key={themeOption.id}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setTheme(themeOption)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        theme.id === themeOption.id ? 'border-primary' : 'border-white/20'
                      }`}
                      style={{ backgroundColor: themeOption.colors.primary }}
                    />
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setLanguage(lang)}
                      className={`p-2 rounded-lg ${
                        language.code === lang.code ? 'bg-primary/20' : 'bg-white/10'
                      }`}
                    >
                      <span>{lang.flag}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar