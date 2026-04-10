
import { useActionState, useEffect, useState } from "react";

function useCurrencyCOnverter(currency) {
    const [data,setWhatToStore]=useState(0);
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)   //! ALWAYS USE FUCKING BACKTICKS MAN
            .then((res) => res.json())
            .then((res)=>setWhatToStore(res[currency]))     //? HERE WE CAN MANAGE OR ACCESS AND OBJECT USING SQUARE BRACKET ALSO
    }, [currency])
    console.log(data);
    return data;
    
}

export default useCurrencyCOnverter;


//! here creating the custom hooks that go by the name useCurrencyCOnverter
//? ABOUT USESTATE HOOK

// 🔹 What is useState in React?

// The useState hook is a built-in function in React that allows you to add state to functional components.

// Before hooks, only class components could manage state — but useState makes it possible in functional components.

// 🔹 What is State?

// State is simply a variable that:

// Stores data in a component
// Can change over time
// When updated → UI automatically re-renders

// 👉 Think of state as memory of the component

// 🔹 Syntax of useState
// const [stateVariable, setStateFunction] = useState(initialValue);
// stateVariable → current value
// setStateFunction → function to update it
// initialValue → starting value


// import { useState } from 'react';

// function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>
//                 Increase
//             </button>
//         </div>
//     );
// }
// export default Counter;

