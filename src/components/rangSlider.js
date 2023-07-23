import React, { useState } from 'react';
import './rangeSlider.css';
import {Slider} from '@material-ui/core';
function RangSlider() {
    const [val, setVal] = useState([0,1500])
    const  updateVal=(e,item)=>{
        setVal(item)
    }
    return (
        <div className="slider">
            <Slider 
            value={val}
            max={3000}
            onChange= {updateVal}
            />
        </div>
    );
};

export default RangSlider;
