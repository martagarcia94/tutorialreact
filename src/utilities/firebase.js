import {useState, useEffect} from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBqXF7lDMEQ8z7px3W7FvZmexlz_jWyTeA",
  authDomain: "task2react.firebaseapp.com",
  databaseURL: "https://task2react-default-rtdb.firebaseio.com",
  projectId: "task2react",
  storageBucket: "task2react.appspot.com",
  messagingSenderId: "891313989388",
  appId: "1:891313989388:web:721bd1c93daced58ac4b29",
  measurementId: "G-51VNGE1SWW"
};
const app = initializeApp(firebaseConfig);
const  database  =  getDatabase(app);

console.log(database,'´tt');

 
 export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const dbRef = ref(database, path);
        const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
        if (devMode) { console.log(`loading ${path}`); }
        return onValue(dbRef, (snapshot) => {
            const val = snapshot.val();
            if (devMode) { console.log(val); }
            setData(transform ? transform(val) : val);
            setLoading(false);
            setError(null);
        }, (error) => {
            setData(null);
            setLoading(false);
            setError(error);
        });
    }, [path, transform]);

    return [data, loading, error];
};
