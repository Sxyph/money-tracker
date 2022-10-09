import {Timestamp} from "firebase/firestore";

interface Transaction{
  type:string;
  amount: number;
  time: Date | Timestamp;
}

export default Transaction;