import { useState, useEffect } from 'react'

export default function BpmInput({ onBpmChange }) {
  const [bpm, setBpm] = useState(120)
  const [tapTimes, setTapTimes] = useState([])
  const [isTapping, setIsTapping] = useState(false)

  useEffect(() => {
    onBpmChange(bpm)
  }, [bpm, onBpmChange])

  const handleBpmChange = (e) => {
    const value = Math.max(40, Math.min(300, parseInt(e.target.value) || 120))
    setBpm(value)
  }

  const handleTap = () => {
    setIsTapping(true)
    const now = Date.now()
    const newTapTimes = [...tapTimes, now].slice(-4)
    setTapTimes(newTapTimes)
    
    if (newTapTimes.length > 1) {
      const intervals = []
      for (let i = 1; i < newTapTimes.length; i++) {
        intervals.push(newTapTimes[i] - newTapTimes[i - 1])
      }
      const averageInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length
      const calculatedBpm = Math.round(60000 / averageInterval)
      setBpm(calculatedBpm)
    }

    setTimeout(() => setIsTapping(false), 200)
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-auto">
          <label className="block text-gray-300 mb-2">BPM</label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={bpm}
              onChange={handleBpmChange}
              min="40"
              max="300"
              className="bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white w-24 text-center focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <span className="text-gray-400">-</span>
            <button
              onClick={handleTap}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${isTapping 
                ? 'bg-primary-500 scale-95 tap-animation' 
                : 'bg-primary-600 hover:bg-primary-500'}`}
            >
              Tap Tempo
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-auto">
          <div className="h-4 flex items-center justify-center gap-1">
            {tapTimes.slice(-4).map((_, i) => (
              <div 
                key={i}
                className={`h-2 w-2 rounded-full ${i < tapTimes.length - 1 ? 'bg-primary-500' : 'bg-gray-600'}`}
              />
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-1">
            {tapTimes.length > 1 ? 'Keep tapping to the beat' : 'Tap to set BPM'}
          </p>
        </div>
      </div>
      
      <input
        type="range"
        min="40"
        max="300"
        value={bpm}
        onChange={handleBpmChange}
        className="w-full mt-4 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-500"
      />
    </div>
  )
}