import React, {useState} from "react"
export default function FilterSection(props)
{
    const getChangedValue = (e)=>
    {
        props.onchangeHandler(e.target.value)
    }
    
    return <div>
        <span>Filter by Section: </span>
        <select onChange={getChangedValue}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        </select>
    </div>
}