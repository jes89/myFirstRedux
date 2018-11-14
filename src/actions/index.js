import * as types from './ActionTypes';

export const create = (color) => ({
    type : types.CREATE,
    color
})


export const remove = () => ({
    type : types.REMOVE
})


export const increment = (idx) => ({
    type : types.INCREMENT,
    idx
})

export const decrement = (idx) => ({
    type : types.DECREMENT,
    idx
})

export const setColor = ({idx, color}) => ({
    type : types.SET_COLOR,
    idx,
    color
})