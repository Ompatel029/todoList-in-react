import React, { useState } from 'react';
export default function Counter(){
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={incCount}>Increment</button>
        </div>
    )
}