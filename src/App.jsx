import { useContext} from 'react'
import './App.css'
import Desk from "./components/Desk"
import { AppContext } from "./provider.jsx"


function App() {
  const [globalmemo, ] = useContext(AppContext);

  const deskComponents = globalmemo.desks.map(
    (value, index, rest) => (
      <Desk key={index} id={index} stools={value[1]} />
    )
  );

  return (
    <>
      <p>Celkem: {globalmemo.suma}</p>
      <div>
        {deskComponents}
      </div>
    </>
  )
}

export default App
