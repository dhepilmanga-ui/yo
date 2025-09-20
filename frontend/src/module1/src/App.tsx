import React from 'react'

export default function Module1App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Module 1</h1>
        <p className="text-xl opacity-80 mb-8">Module application placeholder</p>
        <div className="space-y-4">
          <button className="px-6 py-3 bg-white text-green-800 rounded-lg hover:bg-gray-100 transition-colors">
            Module 1 Action
          </button>
          <div className="text-sm opacity-60">
            Port: 3001
          </div>
        </div>
      </div>
    </div>
  )
}