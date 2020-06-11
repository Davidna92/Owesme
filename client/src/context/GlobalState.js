import React, {createContext, useReducer} from 'react';
import { AppReducer } from './AppReducer';
import swal from 'sweetalert';

const initialState = {
    debts: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
const [state, dispatch] = useReducer(AppReducer, initialState);

function deleteDebt(id) {
    swal({
        title: "מחיקת חוב",
        text: "בטוח שאתה רוצה למחוק את החוב?",
        icon: "warning",
        buttons: ["לא", "כן"],
        dangerMode: false,
    })
    .then((willDelete) => {
        if (willDelete) {
            swal("החוב הוסר, מקווים שהסתדרתם !", {
                icon: "success",
                button: "תודה!"
            });
            dispatch({
                type: 'DELETE_DEBT',
                payload: id
            })
        } else {
            swal("הכל בסדר לא מחקנו כלום")
        }
    })
}

function addDebt(debt) {
    dispatch({
        type: 'ADD_DEBT',
        payload: debt
    })
}

return (
    <GlobalContext.Provider value={{debts: state.debts, deleteDebt, addDebt}}>
{children}
    </GlobalContext.Provider>
)
}