import React from 'react';
import DevicePrice from '../DevicePrice/DevicePrice';

const Device = (props) => {
    return (
        <div>
            <h2>This name is :{props.name}</h2>
            <DevicePrice price={props.price}></DevicePrice>
        </div>
    );
};

export default Device;