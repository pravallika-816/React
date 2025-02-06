import React, { useState } from 'react'
const FBCStateEx = () => {
    const[value, setValue]=useState("MRU");
    let ChangeName=()=>{
        setValue("Malla Reddy University")
    }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={ChangeName}>Full Form</button>
    </div>
  )
}
export default FBCStateEx
