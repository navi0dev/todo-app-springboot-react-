import './Counter.css';
import { useState } from 'react';
import CounterButton from './CounterButton';

export default function Counter(){
    const [count, setCount]=useState(0);

    function incrementCounterParentFuction(by){
        setCount(count+by)
    }
    function decrementCounterParentFuction(by){
        setCount(count-by)
    }
    function resetCounter(){
        setCount(0);
    }
    return (
        <div>
            <CounterButton by={1} 
                incrementMethod={incrementCounterParentFuction}
                decrementMethod={decrementCounterParentFuction}
            />
            <CounterButton by={2} 
                incrementMethod={incrementCounterParentFuction}
                decrementMethod={decrementCounterParentFuction}
            />
            <CounterButton by={3} 
                incrementMethod={incrementCounterParentFuction}
                decrementMethod={decrementCounterParentFuction}
            />
            <div><span className="totalCount">{count}</span></div>
            <button className="resetButton" 
                onClick={resetCounter}>Reset</button>
        </div>       
    )
}