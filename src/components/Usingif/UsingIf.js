import React from 'react';
import { useState } from 'react';

const UsingIf = () => {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 10);
    const decrease = () => setCount(count - 10);
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
};

export default UsingIf;