import { useContext } from 'react'
import { AppContext } from "../provider.jsx"

const Desk = ({id}) => {
    const [globalmemo, dispatch] = useContext(AppContext);
    const stools = globalmemo.desks[id][1].map((v,i) => (<li key={i}>
        <button onClick={()=>
        {
            dispatch({
                type: "eat",
                payload: [id, i, 1]
            })
        }}>{v}</button>
    </li>))

    return (
        <div>
            <p>Stůl číslo {id} vypil {globalmemo.desks[id][0]}</p>
            <ul>
                {stools}
            </ul>
        </div>
    )
}

export default Desk;