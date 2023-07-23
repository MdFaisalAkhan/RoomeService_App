import React from 'react';
import './icons.css';
import { FaStar } from 'react-icons/fa';


const Star =()=>{
const Stars = Array(5).fill(4)

    return(
        <div className="stars">
            {Stars.map((_, index)=>{
                return(
                    <FaStar key={index}/>
                );
            })}
        </div>
    );
};
export default Star;