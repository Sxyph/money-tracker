import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
import MoneyInput from "./components/MoneyInput";

const options = [
    {
        label: 'withdrawl',
        value: 'Withdrawl'
    },
    {
        label: 'deposit',
        value: 'Deposit'
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);


    return (
        <div>
            <Dropdown
            label = {"What would you like to do?"} 
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            />
            <MoneyInput/>
        </div>
    );
}

export default App;