import React from 'react';
import Counter from './Counter';

import './CounterList.css';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
    const conterList = counters.map((counter,i) =>(
        <Counter
            key={i}
            idx = {i}
            {...counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onSetColor={onSetColor}
        ></Counter>
    ));

        // console.log(conterList);
    return (
        <div className="CounterList">
            {conterList}
        </div>
    );
}

export default CounterList;



    
