import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor(){

    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb',
        '#1c7cd6',
        '#1098ad',
        '#0ca678',
        '#37b24d',
        '#74b816',
        '#f4b816',
        '#f59f00',
        '#f76707'
    ]

    const random = Math.floor(Math.random() * 13);

    return colors[random];
}

const mapStateToProps = (state) => ({ counters:state.counters });

const mapDispatchToProps = (dispatch) => ({
    onIncrement : (idx) => dispatch(actions.increment(idx)),
    onDecrement : (idx) => dispatch(actions.decrement(idx)),
    onSetColor : (idx) => {
        const color = getRandomColor();
        dispatch(actions.setColor({idx, color}))
    }
});

const CounterListContainer = connect(mapStateToProps,mapDispatchToProps)(CounterList);

export default CounterListContainer;
