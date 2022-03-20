import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Count from '../Count/Count';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increase = () => {
        const newSteps = steps + 1;
        setSteps(newSteps)
    }
    useEffect(() => {
        console.log(steps)
    }, [steps])
    return (
        <div>
            <h2>Steps :{steps}</h2>
            <button onClick={increase}>De dour</button>
            <Count></Count>
        </div>
    );
};

export default Watch;