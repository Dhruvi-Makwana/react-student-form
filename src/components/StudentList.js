import Listing from './StudentData'
import StudentForm from './StudentForm'
import './StudentListing.css'
import React, {useState} from 'react'
import FilterSection from './FilterDataShowing'
let dummyStudentData = [
	{
		id:1,
		studentname: "aishwariya",
		section: "A",
		rollno: 101,
		standard: 12
	},
	{
		id:2,
		studentname: "komal",
		section: "B",
		rollno: 102,
		standard: 11
	},
    {
		id:3,
		studentname: "jinal",
		section: "B",
		rollno: 102,
		standard: 11
	},
    {
		id:4,
		studentname: "palak",
		section: "C",
		rollno: 102,
		standard: 12
	}
]

export default function StudentList()
{
    const [studentData, setStudentData] = useState(dummyStudentData)
    const [filterValue, setFilterValue] = useState('A') //default filtered by section 'A'
    const getStudentdata = (newStudentData) =>
    {
        console.log(newStudentData)
        setStudentData([...dummyStudentData,newStudentData])
    }  

    const getFilterValue = (filterValue) =>
    {
        console.log(filterValue)
        setFilterValue(filterValue)
    }
    const StudentFilterData = studentData.filter((data) => (data.section === filterValue))
    
    return <div>
        <StudentForm ongetData={getStudentdata}></StudentForm>
        <FilterSection onchangeHandler={getFilterValue}></FilterSection>
        <table className='customers'>
            <tr>
                <th>No</th>
                <th>Student Name</th>
                <th>Section</th>
                <th>Roll.no</th>
                <th>Class</th>
            </tr>
                {/* with filter data showing */}
                {StudentFilterData.map((data) => (<Listing 
                    key={data.id}
                    id={data.id} 
                    username={data.studentname}
                    section={data.section}
                    rollno={data.rollno}
                    standard={data.standard}></Listing>))}


                {/* without filter data showing */}
                {/* {studentData.map((data) =>
                (
                <Listing 
                key={data.id}
                id={data.id} 
                username={data.studentname}
                section={data.section}
                rollno={data.rollno}
                standard={data.standard}
                ></Listing>
                )
                )}   */}
            
        </table>
    </div>
}