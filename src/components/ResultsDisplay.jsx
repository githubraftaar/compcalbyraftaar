export default function ResultsDisplay({ bpm, style }) {
  const calculateTimings = () => {
    const quarterNote = 60000 / bpm
    
    const styleSettings = {
      Staccato: { attack: 5, release: 50, color: 'bg-purple-500' },
      Legato: { attack: 30, release: 200, color: 'bg-blue-500' },
      Neutral: { attack: 15, release: 100, color: 'bg-emerald-500' },
    }
    
    const noteValues = {
      '1/1': quarterNote * 4,
      '1/2': quarterNote * 2,
      '1/4': quarterNote,
      '1/8': quarterNote / 2,
      '1/16': quarterNote / 4,
      '1/32': quarterNote / 8,
      'Dotted 1/2': quarterNote * 2 * 1.5,
      'Dotted 1/4': quarterNote * 1.5,
      'Dotted 1/8': (quarterNote / 2) * 1.5,
      'Triplet 1/2': (quarterNote * 2) / 3,
      'Triplet 1/4': quarterNote / 3,
      'Triplet 1/8': (quarterNote / 2) / 3,
    }
    
    return { ...styleSettings[style], noteValues }
  }
  
  const { attack, release, noteValues, color } = calculateTimings()
  
  return (
    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 md:p-8 border-t border-gray-700/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Compression Settings */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <span className={`w-3 h-3 rounded-full ${color}`}></span>
            Compression Settings
          </h3>
          
          <div className="space-y-4">
            <div className="bg-dark-900/50 p-4 rounded-lg border border-gray-700/50">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Attack</span>
                <span className="font-mono">{attack}ms</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`${color} h-2 rounded-full`} 
                  style={{ width: `${Math.min(100, attack / 0.3)}%` }}
                ></div>
              </div>
            </div>
            
            <div className="bg-dark-900/50 p-4 rounded-lg border border-gray-700/50">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Release</span>
                <span className="font-mono">{release}ms</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`${color} h-2 rounded-full`} 
                  style={{ width: `${Math.min(100, release / 2)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Delay/Reverb Settings */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Delay/Reverb Sync</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(noteValues).map(([name, value]) => (
              <div 
                key={name} 
                className="bg-dark-900/50 p-3 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-colors"
              >
                <div className="text-sm text-gray-400">{name}</div>
                <div className="font-mono text-lg">{Math.round(value)}ms</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}