import React from 'react'
import Button from './Button'

const QuoteBox = ({quotesRandom, colorRandom, clickButton}) => {


  return (
    <article className='quote-box'>
        <h2 style={{color: colorRandom}}>{quotesRandom.quote}</h2>
        <p style={{color: colorRandom}}><b>Author:</b> {quotesRandom.author}</p>
        <Button colorRandom={colorRandom}
        clickButton={clickButton}/>

    </article>
  )
}

export default QuoteBox