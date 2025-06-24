import { useState } from 'react'

export default function App() {

  return (
    <div>
      <h1>this parent componant </h1>
      <hello/>
    </div>
  )
}

function Hello() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>
    </div>
  )
}

