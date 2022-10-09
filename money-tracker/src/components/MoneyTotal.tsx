import React, { useState, useEffect } from 'react';
import useData from '../hooks/useData';
import Transaction from '../types/Transaction';
import { Timestamp } from "firebase/firestore";

const MoneyTotal = () => {
    const [total, setTotal] = useState(0);
    const [spent, setSpent] = useState(0);
    const [added, setAdded] = useState(0);
    const data = useData();

    /**
     * Given an array of data, return the sum 
     */
    const calculateSum = (transactions: Transaction[]): number => {
        var sum = 0;

        transactions.forEach((item) => {
            if (item.type === "Withdrawl") {
                sum = sum - item.amount;
            }
            else {
                sum = sum + item.amount;
            }
        }
        )

        // The other way
        // return transactions.reduce((sum, item) => {
        //     if (item.type === "Withdrawl") {
        //         return sum - item.amount;
        //     } else {
        //         return sum + item.amount;
        //     }
        // }, 0)

        return sum;
    }

    const calculateSpent = (transactions: Transaction[]): number => {
        var spent = 0;

        transactions.forEach((item) => {
            if(item.type === "Withdrawl"){
                spent = spent + item.amount;
            }
        })

        return spent;
    };

    const calculateAdded = (transactions: Transaction[]): number => {
        var added = 0;

        transactions.forEach((item) => {
            if (item.type === "Deposit") {
                added = added + item.amount;
            }
        })

        return added;
    };

    useEffect(() => {
        setTotal(calculateSum(data));
        setSpent(calculateSpent(data));
        setAdded(calculateAdded(data));
    }, [data]);


    return (
        <div className='ui container'>
            <div className='ui segment'>
                <h3 className='ui header'>Total: ${total}</h3>
            </div>
            <h2 className='ui header'>Analysis</h2>
            <div className='ui segment'>
                <h3>amount spent:</h3>
                <p>{spent}</p>
                <br></br>
                <h3>amount added:</h3>
                <p>{added}</p> 
            </div>
        </div>
    );
};

export default MoneyTotal;