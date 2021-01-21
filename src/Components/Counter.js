import {React,useState} from 'react'

const Counter = () => {
    const handleIncrement = ()=>{
        setCount((prevCount)=>prevCount+1);
    }
    const handleDecrement = ()=>{
        setCount((prevCount)=>prevCount-1);
    }
    const handleReset = ()=>{
        setCount(0);
    }
    console.log(useState(0));
    const [Count,setCount] = useState(0);
    return (
        <div>
            {Count}
            <button
            onClick={handleIncrement}
            >+
            </button>
            <button
            onClick={handleDecrement}
            >-
            </button>
            <button
            onClick={handleReset}
            >Reset
            </button>
    </div>
    )
}

export default Counter
