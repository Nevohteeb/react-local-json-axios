import {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Students = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        axios.get('./students.json')
            .then(response => {
                console.log(response.data);
                setStudents(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    // New StudentPost 
    const StudentPost = ({students}) => {
        const mappedStudents = students.map((student, index) => {
            return (
                <div key={index}>
                    <h2>{student.first_name} {student.last_name}</h2>
                    <h3>{student.email}</h3>
                </div>
            )
        })

        return (
            <>
                {/* All of our students returned in the map */}
                {mappedStudents}
            </>
        )
    }

    // FINAL RETURN
    return (
        <StudentPost students={students}/>
    )
}

export default Students