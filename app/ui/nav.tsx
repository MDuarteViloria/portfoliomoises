'use client';
import React, { useState } from "react";
import { useApp, languages, colorPalettes } from '@/app/contexts/AppContext';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  
  const { 
    language, 
    setLanguage, 
    theme, 
    setTheme, 
    colorPalette, 
    setColorPalette, 
    translations 
  } = useApp();

  const menuItems = [
    { name: translations.nav.home, href: "#home" },
    { name: translations.nav.skills, href: "#skills" },
    { name: translations.nav.projects, href: "#projects" },
    { name: translations.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="w-full max-w-4xl flex justify-between mx-auto text-gray-900 dark:text-gray-100 shadow-2xl px-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md py-4 rounded-b-3xl relative border-b border-gray-200/50 dark:border-gray-700/50">
      
      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center justify-between w-full">       
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-700 dark:text-gray-300 focus:outline-none hover:text-primary transition-colors duration-300"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        <div className={`absolute top-16 left-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-2xl rounded-2xl p-6 z-50 border border-gray-200/50 dark:border-gray-700/50 ${
          isMenuOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4 pointer-events-none"
        } transition-all duration-300`}>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block w-full text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <span className="text-lg">{language.flag}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            
            {isLanguageOpen && (
              <div className="absolute top-12 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl rounded-xl p-2 z-50 border border-gray-200/50 dark:border-gray-700/50 min-w-[120px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang);
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                      language.code === lang.code
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Selector */}
          <button
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <i className="bx bx-sun text-xl"></i>
          </button>
        </div>

        {/* Theme Dropdown */}
        {isThemeOpen && (
          <div className="absolute top-16 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl rounded-xl p-2 z-50 border border-gray-200/50 dark:border-gray-700/50 min-w-[120px]">
            {(['light', 'dark', 'system'] as const).map((themeOption) => (
              <button
                key={themeOption}
                onClick={() => {
                  setTheme(themeOption);
                  setIsThemeOpen(false);
                }}
                className={`w-full px-3 py-2 rounded-lg transition-colors duration-300 text-left ${
                  theme === themeOption
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {translations.theme[themeOption]}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-between w-full">
        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          {menuItems.slice(0, 3).map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative hover:text-primary text-gray-700 dark:text-gray-300 transition-colors duration-300 font-medium group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Color Palette Selector */}
          <div className="relative">
            <button
              onClick={() => setIsPaletteOpen(!isPaletteOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <div 
                className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: colorPalette.colors.primary }}
              />
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            
            {isPaletteOpen && (
              <div className="absolute top-12 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl rounded-xl p-3 z-50 border border-gray-200/50 dark:border-gray-700/50 min-w-[200px]">
                <div className="grid grid-cols-1 gap-2">
                  {colorPalettes.map((palette) => (
                    <button
                      key={palette.id}
                      onClick={() => {
                        setColorPalette(palette);
                        setIsPaletteOpen(false);
                      }}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-300 ${
                        colorPalette.id === palette.id
                          ? "bg-primary text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      <div className="flex gap-1">
                        {Object.values(palette.colors).slice(0, 3).map((color, index) => (
                          <div
                            key={index}
                            className="w-3 h-3 rounded-full border border-white/50"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{palette.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            
            {isLanguageOpen && (
              <div className="absolute top-12 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl rounded-xl p-2 z-50 border border-gray-200/50 dark:border-gray-700/50 min-w-[140px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang);
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                      language.code === lang.code
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Selector */}
          <div className="relative">
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <i className="bx bx-sun text-xl"></i>
            </button>
            
            {isThemeOpen && (
              <div className="absolute top-12 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl rounded-xl p-2 z-50 border border-gray-200/50 dark:border-gray-700/50 min-w-[120px]">
                {(['light', 'dark', 'system'] as const).map((themeOption) => (
                  <button
                    key={themeOption}
                    onClick={() => {
                      setTheme(themeOption);
                      setIsThemeOpen(false);
                    }}
                    className={`w-full px-3 py-2 rounded-lg transition-colors duration-300 text-left ${
                      theme === themeOption
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {translations.theme[themeOption]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="bg-gradient-to-r from-primary to-highlight text-white rounded-xl px-6 py-2 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            style={{
              background: `linear-gradient(135deg, ${colorPalette.colors.primary}, ${colorPalette.colors.highlight})`
            }}
          >
            {translations.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}