import './StudentForm.css'
import React, {useState} from "react"
export default function StudentForm(props)
{
    const [studentName, SetStudentName] = useState('')
    const [section, setSection] = useState('')
    const [rollno, setRollNo] = useState('')
    const [standard, setStandard] = useState('')
    const enterNameChange = (e)=>
    {
        SetStudentName(e.target.value)
    }
    const enterSectionChange = (e)=>
    {
        setSection(e.target.value)
    }
    const enterRollNochange = (e) =>
    {
        setRollNo(e.target.value)
    }
    const enterStandaredChange = (e) =>
    {
        setStandard(e.target.value)
    }
    const getStudentData = (e) =>
    {   
        e.preventDefault()
        // console.log(studentName, section, rollno, standard)
        const actualData = 
        {
            id:4,
            studentname: studentName,
            section: section,
            rollno: rollno,
            standard: standard
        }
        props.ongetData(actualData)
    }
   
    return <div> 
        <h3> Enter a student data here:</h3>
            <form onSubmit={getStudentData}>
            <label>Student Name:</label>
            <input type="text" onChange={enterNameChange} /><br></br>
            <label>Section:</label>
            <input type="text" onChange={enterSectionChange}/><br></br>
            <label>Roll No:</label>
            <input type="number" onChange={enterRollNochange}/><br></br>
            <label>Standard:</label>
            <input type="text" onChange={enterStandaredChange}/><br></br>
            <input type="submit" value="sumbit"></input>
            </form>
    </div>
}