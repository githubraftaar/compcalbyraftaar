import { useState } from 'react'
import Header from './components/Header'
import BpmInput from './components/BpmInput'
import StyleSelector from './components/StyleSelector'
import ResultsDisplay from './components/ResultsDisplay'


export default function App() {
  const [bpm, setBpm] = useState(120)
  const [style, setStyle] = useState('Neutral')

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 to-dark-800 text-gray-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <Header />
        <div className="bg-dark-800 rounded-xl shadow-2xl overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <BpmInput onBpmChange={setBpm} />
            <StyleSelector onStyleChange={setStyle} />
          </div>
          <ResultsDisplay bpm={bpm} style={style} />
        </div>
        <footer className="text-center text-gray-400 text-sm">
          {/* <p>Free to use and distribute. No audio was harmed in the making of this tool.</p> */}
          <p className="mt-1">Creadted by <a target='_blank' href="https://github.com/debapriyo007"><span className='underline'>@debu-21</span></a></p>
        </footer>
      </div>
    </div>
  )
}