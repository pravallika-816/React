import React,{useEffect, useState} from 'react'

const ExUseEffect = () => {
    const [count, setCount]=useState(0);
    useEffect(()=>{
        // setCount(1000);
        document.title="MRU"
        setTimeout(()=>{
            setCount(1000);
        },4000)
    })
    return (
        <div>ExUseEffect
            <h1>{count}</h1>     
        </div>
    )
}

export default ExUseEffect
