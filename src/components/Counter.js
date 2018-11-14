import React from 'react';
import propTypes from 'prop-types';
import './Counter.css';
import { prototype } from 'node-notifier/notifiers/growl';

const Counter = ({number, color, idx, onIncrement, onDecrement, onSetColor}) =>{
    return(
        <div 
            className="Counter" 
            onClick={() => onIncrement(idx)} 
            oncontextmenu={(e)=>{e.preventDefault(); onDecrement(idx)}} 
            onDoubleClick={() => onSetColor(idx)}
            style={{backgroundColor : color}}
            >
            {number}
        </div>
    )

}

Counter.propTypes = {
    number      : propTypes.number  ,
    color       : propTypes.string  ,
    idx         : propTypes.number  ,
    onIncrement : propTypes.func    ,
    onDecrement : propTypes.func    ,
    onSetColor  : propTypes.func
}

Counter.defaultProps = {
    idx         : 0,
    number      : 0,
    color       : 'black',
    onIncrement : () => {console.warn('onIncrement is not defined')},
    onDecrement : () => {console.warn('onDecrement is not defined')},
    onSetColor  : () => {console.warn('onSetColor is not defined')}
}


export default Counter;