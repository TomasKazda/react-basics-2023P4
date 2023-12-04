import { createContext, useReducer } from "react";

// const initData = {
//   name: "U okoralého chlebíčku",
//   suma: 0,
//   desks: [{idd: 1, 
//            desksum: 0, 
//            stool: [{ids: 1, stoolsum: 0},
//                    {ids: 2, stoolsum: 0}]
//           },
//           {idd: 2, 
//             desksum: 0, 
//             stool: [{ids: 3, stoolsum: 0},
//                     {ids: 4, stoolsum: 0}]
//           }]
// }

const initDataFlat = {
    name: "U okoralého chlebíčku",
    suma: 0,
    desks: [[0,[0, 0, 0]], //[DeskSuma,[Stool1, Stool2, Stool3]]
            [0,[0, 0]],
            [0,[0, 0, 0]],
           ]
}

const reducer = (state, action) => {
    if (action.type === "eat") 
    {   const [desk, stool, count] = action.payload
        const newState = JSON.parse(JSON.stringify(state))
        newState.desks[desk][1][stool] += count
        newState.desks[desk][0] += count
        newState.suma += count
        return newState
    }
    throw Error('Unknown action.');
}

export const AppContext = createContext(initDataFlat)
//const useAppContext = () => useContext(AppContext);

export const AppProvider = ({children}) => {
    const store = useReducer(reducer, initDataFlat)

    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )
} 
//export default useAppContext;