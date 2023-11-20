import React, { useState, useRef } from 'react'
import './App.css'
import Displej from "./components/Display"
import Desk from "./components/Desk"

const initData = {
  name: "U okoralého chlebíčku",
  suma: 0,
  desks: [{idd: 1, 
           desksum: 0, 
           stool: [{ids: 1, stoolsum: 0},
                   {ids: 2, stoolsum: 0}]
          },
          {idd: 2, 
            desksum: 0, 
            stool: [{ids: 3, stoolsum: 0},
                    {ids: 4, stoolsum: 0}]
          }]
}

const initDataFlat = {
  name: "U okoralého chlebíčku",
  suma: 0,
  desks: [[0,[0, 0, 0]],
          [0,[0, 0]],
         ]
}

function App() {
  const [globalmemo, setGlobalmemo] = useState(initDataFlat);
  const [pozdrav, setPozdrav] = useState("Čau");
  const [cislo, setCislo] = useState(0);
  const inputRef = useRef();
  const display = <Displej text={cislo} />
  
  const eat = (desk, stool, count) => {
    globalmemo.desks[desk][1][stool] += count
    globalmemo.desks[desk][0] += count
    globalmemo.suma += count
    
    const newGlobalmemo2 = JSON.parse(JSON.stringify(globalmemo));

    // const newGlobalmemo = {...globalmemo,
    //                         desks: [...globalmemo.desks] 
    //                       };

    setGlobalmemo(newGlobalmemo2);
  }

  const Zobraz = (text) => {  
    setPozdrav(text)
  }
  const Cislo = (num) => {  
    setCislo((old) => (old + num))
  }

  const deskComponents = globalmemo.desks.map(
    (value, index, rest) => (
      <Desk key={index} id={index} suma={value[0]} stools={value[1]} />
    )
  );

  const deskComponents2 = [];
  let i=0;
  for (const iterator of globalmemo.desks) {
    console.log(iterator)
    deskComponents2.push(
      <Desk key={i} id={i} suma={iterator[0]} stools={iterator[1]} />
    )
    i++;
  }

  return (
    <>
      <input ref={inputRef} type="text" defaultValue={pozdrav} />
      <button onClick={(e) => {Zobraz(inputRef.current.value)}}>Zobraz</button> 
      <Displej text={pozdrav} />

      <br />
      <input type="number" defaultValue={cislo} onInput={(e) => {Cislo(Number(e.currentTarget.value))}} />
      {display}
      <div>
        {deskComponents}
      </div>
    </>
  )
}

export default App
