// import number from './number';
// import color from './color';

// import { combineReducers} from 'redux';

import * as types from '../actions/ActionTypes';


const initialState = {
    counters : [{
        color : 'black',
        number : 0
    }]
}

const counter = (state = initialState, action) => {
    
    const {counters} = state;

    switch(action.type){
        case types.CREATE : 
            return{
                counters : [
                    ...counters,
                    {
                        color : action.color,
                        number : 0
                    }
                ]
            }
        case types.REMOVE : 
            return counters.slice(0,counters.length-1)
        case types.INCREMENT : 
            return{
                counters : [
                    ...counters.slice(0, action.idx),
                    {
                        ...counters[action.idx],
                        number : counters[action.idx].number + 1
                    }
                ]
            }
        case types.DECREMENT : 
            return{
                counters : [
                    ...counters.slice(0, action.idx),
                    {
                        ...counters[action.idx],
                        number : counters[action.idx].number - 1
                    },
                    ...counters.slice(action.idx + 1, counters.length)
                ]
            }


        default:
        return state;
    }

}

export default counter;

// const reducers = combineReducers({
//     numberData : number,
//     colorData : color
// })

// export default reducers;