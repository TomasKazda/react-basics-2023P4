import React, { useState, useRef } from 'react'
import './App.css'
import Displej from "./components/Display"

function App() {
  const [pozdrav, setPozdrav] = useState("Čau");
  const [cislo, setCislo] = useState(0);
  const inputRef = useRef();
  const display = <Displej text={cislo} />
  

  const Zobraz = (text) => {  
    setPozdrav(text)
  }
  const Cislo = (num) => {  
    setCislo((old) => (old + Number(num)))
  }

  return (
    <>
      <input ref={inputRef} type="text" defaultValue={pozdrav} />
      <button onClick={(e) => {Zobraz(inputRef.current.value)}}>Zobraz</button> 
      <Displej text={pozdrav} />

      <br />
      <input type="number" defaultValue={cislo} onInput={(e) => {Cislo(e.currentTarget.value)}} />
      {display}
    </>
  )
}

export default App
