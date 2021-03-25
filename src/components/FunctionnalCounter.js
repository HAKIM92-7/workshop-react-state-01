import React from 'react'
import {useState,useEffect} from 'react'
const FunctionnalCounter = () => {

    const [count , setCount] = useState(0) ;
    const [inputValue , setInput] = useState("") ;

    useEffect(() => {

        console.log('component mounted')
      
    }, [])

    return (
        <div>
            <button type="button" onClick={() => setCount(count+1)} class="btn btn-success">+</button>
            <span style={{margin : "20px 30px"}}>{count}</span>
            <button type="button" onClick={()=> count>0 ? setCount(count-1) : null} class="btn btn-danger">-</button> <br/>

            <input type="text" placeholder="enter a message" onChange={(e)=> setInput(e.target.value)}/> <br/>
            <p>{inputValue}</p>

        </div>
    )
}

export default FunctionnalCounter
