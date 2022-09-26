import React, {useState} from "react";

const MoneyInput = () => {
    const [term, setTerm] = useState('');

    const onSubmit= (event) => {
        event.preventDefault();
        
       console.log(term);
    };


    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label className="label">How much money?</label>
                    <input
                        type="text" 
                        value = {term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default MoneyInput;