import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>count :{count}</h2>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default Count;