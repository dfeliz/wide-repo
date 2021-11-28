import { useState } from 'react';
import { funFacts } from './constants';
import arrow from './arrow.svg';

const getRandomFunFact = () => {
  return funFacts[Math.floor(Math.random() * funFacts.length)];
}

const FunFact = () => {
  const [fact, setFact] = useState(getRandomFunFact());

  const handleClick = () => {
    setFact(getRandomFunFact());
  }

  return (
    <div style={factStyles} onClick={handleClick}>
      <span>fun fact: {fact}</span>
      <div style={iconStyles}>
        <svg fill={"#505A5A"} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.88,15.53,7,5.66A1,1,0,0,0,5.59,7.07l9.06,9.06-8.8,8.8a1,1,0,0,0,0,1.41h0a1,1,0,0,0,1.42,0l9.61-9.61A.85.85,0,0,0,16.88,15.53Z"/>
            <path d="M26.46,15.53,16.58,5.66a1,1,0,0,0-1.41,1.41l9.06,9.06-8.8,8.8a1,1,0,0,0,0,1.41h0a1,1,0,0,0,1.41,0l9.62-9.61A.85.85,0,0,0,26.46,15.53Z"/>
        </svg>
      </div>
    </div>
  )
}

export default FunFact;

const factStyles = {
  paddingTop: 8,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 8,
  marginTop: '1em',
  borderRadius: 4,
  cursor: 'pointer',
  textAlign: 'center',
  position: 'relative',
  border: '1px solid #505A5A',
  color: '#AAAAAA'
};

const iconStyles = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 4,
  width: 20,
  height: 20,
  zIndex: -3,
  margin: 'auto',
}
