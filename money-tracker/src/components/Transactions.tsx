import React,{useState} from 'react';
import MoneyTotal from './MoneyTotal';
import useData from '../hooks/useData';
import {Timestamp, doc, deleteDoc} from "firebase/firestore";
import Transaction from '../types/Transaction';

const Transactions = () => {
    const data = useData();

    const tmp = data.slice(0).sort((a,b)=>{
        return (b.time as Timestamp).toDate().getTime() - (a.time as Timestamp).toDate().getTime();
    });

    const renderItem = (transaction: Transaction) => {
        var color = "";

        if(transaction.type === "Withdrawl"){
            color = "red ";
        }
        else{
            color = "green ";
        }

        return (
            <div className='ui segment' key={(transaction.time as Timestamp).toMillis()}>
                <h3 className={`ui ${color}header`}>{transaction.amount}</h3>
                <p>{transaction.type}</p>
                <p>{(transaction.time as Timestamp).toDate().toDateString()}</p>
            </div>
        )
    };


    return (
            <div className='ui row'>
                <div className='seven wide column'>
                    <h3>Previous Transactions</h3>
                    {
                        tmp.map((transaction) => renderItem(transaction))
                    }
                </div>
                <div className='nine wide column'>
                    <MoneyTotal/>
                </div>
            </div>
    );
};

export default Transactions;