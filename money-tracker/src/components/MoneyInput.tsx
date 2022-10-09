import React, { useState, FormEventHandler } from "react";
import Dropdown from "./Dropdown";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Transaction from "../types/Transaction";

const options: { label: Transaction["type"], value: string }[] = [
    {
        label: 'withdrawl',
        value: 'Withdrawl'
    },
    {
        label: 'deposit',
        value: 'Deposit'
    }
];

const MoneyInput = () => {
    const [term, setTerm] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string>(options[0].value)


    const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        if(term === ""){
            return;
        }
        addToDatabase(selectedOption);
    };

    const addToDatabase = async (selectedOption: string) => {
        const db = getFirestore();

        const newRecord: Transaction = {
            type: selectedOption,
            amount: Number(term),
            time: new Date()
        }

        await addDoc(collection(db, "Transactions"), newRecord);

    };

    return (
        <div className="ui container">
            <Dropdown
                label={"What would you like to do?"}
                options={options}
                onChange={e => setSelectedOption(e.target.value)}
                value={selectedOption}
            />
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={onFormSubmit}>
                    <div className="field">
                        <label className="label">How much would you like to {selectedOption}?</label>
                        <input
                            type="number"
                            value={term}
                            onChange={(event) => setTerm(event.target.value)}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MoneyInput;