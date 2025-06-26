import { useState } from 'react'

export default function State(){
  const [count, setCount] = useState(0);

  function onIncrease() {
    setCount(count + 1);
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif'
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  const countStyle = {
    fontSize: '2rem',
    marginBottom: '20px'
  };

  return(
    <div style={containerStyle}>
      <h1 style={countStyle}>Count: {count}</h1>
      <div>
        <button style={buttonStyle} onClick={onIncrease}>Increase</button>
        <button style={buttonStyle} onClick={() => setCount(0)}>Reset</button>
        <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  )
}
