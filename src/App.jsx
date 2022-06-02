import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'

  const arrayColors = [
    '#2ba537','#940F50','#cc0b0b','#9ab30f','#065ec9','#9B47FF','#da0cbe'
  ]

function App() {

  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getElementRandom = array => {
    const i = createNumberRandom(array)
    return array[i]

  }

 

  const [quotesRandom, setQuotesRandom] = useState(getElementRandom(quotes))
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors))

  const clickButton = () => {
    setColorRandom(getElementRandom(arrayColors))
    setQuotesRandom(getElementRandom(quotes))
  }


  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <QuoteBox
      quotesRandom={quotesRandom}
      colorRandom={colorRandom}
      clickButton={clickButton}
      />
    </div>
  )
}

export default App
