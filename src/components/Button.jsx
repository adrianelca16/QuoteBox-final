import React from 'react'

const Button = ({colorRandom, clickButton}) => {
  return (
    <button style={{backgroundColor: colorRandom}} className='quote-btn' onClick={clickButton}>change</button>
  )
}

export default Button