import { useState } from "react"

export default function StyleSelector({ onStyleChange }) {
  const [selectedStyle, setSelectedStyle] = useState('Neutral')
  
  const handleStyleChange = (style) => {
    setSelectedStyle(style)
    onStyleChange(style)
  }

  const styleData = [
    { id: 'staccato', name: 'Staccato', desc: 'Short, detached notes' },
    { id: 'legato', name: 'Legato', desc: 'Smooth, connected notes' },
    { id: 'neutral', name: 'Neutral', desc: 'Balanced approach' },
  ]

  return (
    <div className="mb-8">
      <h3 className="text-gray-300 mb-4">Vocal Style</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {styleData.map((item) => (
          <button
            key={item.id}
            onClick={() => handleStyleChange(item.name)}
            className={`p-4 rounded-lg border transition-all ${
              selectedStyle === item.name
                ? 'border-primary-500 bg-primary-500/10'
                : 'border-gray-700 hover:border-gray-600 hover:bg-gray-700/50'
            }`}
          >
            <h4 className="font-medium text-lg mb-1">{item.name}</h4>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </button>
        ))}
      </div>
    </div>
  )
}