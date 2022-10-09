import React from "react";
import MoneyInput from "./components/MoneyInput";
import Transactions from "./components/Transactions";
import Header from "./components/Header";
import Route from "./components/Route";



const App = () => {


    return (
        <div>
            <Header/>
            <div className="ui container">
                <Route path="/">
                    <MoneyInput/>
                    <br></br>
                    <div className="ui grid">
                            <Transactions/>
                    </div>
                </Route>
            </div>
        </div>

    );
}

export default App;