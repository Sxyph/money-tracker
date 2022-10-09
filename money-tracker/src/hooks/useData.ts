import { collection, DocumentData, getFirestore, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Transaction from "../types/Transaction";

const useData = () => {

    const [state, setState] = useState<DocumentData[]>([])
    
    useEffect(() => {
        const db = getFirestore();
        const response = collection(db, "Transactions");
    
        onSnapshot(response, (querySnapshot) => {
            const transactionsList = querySnapshot.docs.map(doc => doc.data())
            setState(transactionsList);
        });
    }, []);

    return state as Transaction[];

};

export default useData;