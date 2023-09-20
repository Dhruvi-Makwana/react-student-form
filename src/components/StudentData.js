import './StudentListing.css'

export default function Listing(props)
{
    return <>
            <tr>
                <td>{props.id}</td>
                <td>{props.username}</td>
                <td>{props.section}</td>
                <td>{props.rollno}</td>
                <td>{props.standard}</td>
            </tr>
            </>
}