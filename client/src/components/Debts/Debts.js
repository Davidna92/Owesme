import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState';



export const Debts = ({debt}) => {

 const {deleteDebt} = useContext(GlobalContext);

    return (
 <li className="debt">
    <h4>{debt.name}</h4>
    <div>{debt.reason}</div>
     <span>{debt.amount}&#8362;</span><button
      onClick={() => deleteDebt(debt.id)}
      className="delete-btn">מחק</button>
         </li>
    )
}
