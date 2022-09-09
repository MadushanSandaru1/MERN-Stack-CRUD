import React, {useState} from "react";

function CounterFunction() {

    let [number, setNumber] = useState(0)

    function increment() {
        setNumber(++number);
    }

    return(
        <div>
            <h3>Functional Component</h3>
            <h2>Counter = {number}</h2>
            <button onClick={e => increment()}>Increment</button>
        </div>
    )
}

export default CounterFunction;