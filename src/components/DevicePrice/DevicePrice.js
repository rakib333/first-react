import React from 'react';

const DevicePrice = (props) => {
    console.log(props)
    return (
        <div>
            <p>The price is : {props.price}</p>
        </div>
    );
};

export default DevicePrice;