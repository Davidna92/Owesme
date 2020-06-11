import React, {useState, useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';


export const AddDebts = () => {

const [name, setName] = useState('');
const [reason, setReason] = useState('');
const [amount, setAmount] = useState('');

const {addDebt} = useContext(GlobalContext);


const onSubmit = e => {
    e.preventDefault();


    const newDebt = {
        id: Math.floor(Math.random() * 100000000),
        name,
        reason,
        amount: +amount
    }
    addDebt(newDebt);
    setName('')
    setReason('')
    setAmount('')
}

    return (
        <div>
            <h3>הוסף חייב</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    
                    <input type="text" placeholder="שם החייב" required value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="form-control">
                   
                    <input type="text" placeholder="סיבת החוב" required  value={reason} onChange={(e) => setReason(e.target.value)}></input>
                </div>
                <div className="form-control">
                    
                    <input type="number" placeholder="סכום" required value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                   </div>
                   <button className="btn">הוסף</button>
            </form>
        </div>
    )
}
