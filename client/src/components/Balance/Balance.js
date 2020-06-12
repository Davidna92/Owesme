import React, {useContext} from 'react'
import CountUp from 'react-countup';
import {GlobalContext} from '../../context/GlobalState';

export const Balance = () =>{
const {debts} = useContext(GlobalContext);

const amounts = debts.map(debt => debt.amount);
const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="balance-container">
            <div>
            <h4>סכום כולל</h4>
            <h2><CountUp start={0} end={Number(total)} duration={2.5} separator=","></CountUp>&#8362;</h2>
            </div>
        </div>
    )
}

