"use client"

import { useState } from "react"

export default function Page() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("Medium")

  const menuItems = [
    { label: "PLAY", action: () => console.log("Starting game...") },
    { label: "INSTRUCTIONS", action: () => console.log("Show instructions...") },
    { label: "DIFFICULTY", action: () => console.log("Change difficulty...") },
    { label: "ABOUT DEVELOPER", action: () => console.log("Show about...") },
  ]

  const difficulties = ["Easy", "Medium", "Hard", "Expert"]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-black to-black"></div>

      {/* Subtle animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/3 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <main className="relative z-10 flex flex-col items-center space-y-8 p-8">
        {/* Game Title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-4 text-white drop-shadow-2xl">LIFE ON THE</h1>
          <h2 className="text-4xl md:text-6xl font-light tracking-widest text-gray-300 glow-text">LINE</h2>
          <div className="mt-4 text-lg md:text-xl text-gray-400 tracking-wide">H A N G M A N</div>
        </div>

        {/* Menu Buttons */}
        <div className="flex flex-col space-y-6 w-full max-w-md">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="group relative px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold text-lg tracking-wide transition-all duration-300 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <span className="relative z-10">{item.label}</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>

        {/* Current Difficulty Display */}
        <div className="mt-8 text-center">
          <div className="text-sm text-gray-400 mb-2">CURRENT DIFFICULTY</div>
          <div className="text-xl font-semibold text-white glow-text">{selectedDifficulty.toUpperCase()}</div>
        </div>

        {/* Hangman ASCII Art Preview */}
        <div className="mt-8 font-mono text-gray-500 text-sm leading-tight text-center">
          <div>{"  +---+"}</div>
          <div>{"  |   |"}</div>
          <div>{"      |"}</div>
          <div>{"      |"}</div>
          <div>{"      |"}</div>
          <div>{"      |"}</div>
          <div>{"========="}</div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 text-center text-gray-600 text-sm">
        <div>Press any button to begin your journey...</div>
      </footer>

      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  )
}
