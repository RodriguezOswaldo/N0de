import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AttendanceList = () =>{
    const [attendance, setAttendance] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        axios.get(`${apiUrl}/api/attendance`)
        .then(response =>{
            setAttendance(response.data);
        }).catch(error =>{
            console.error('Error fetching attendance:', error);
        });
    }, [apiUrl]);
        return(
            <div>
                <h1>Attendance</h1>
                <ul>
                    {attendance.map(item =>(
                        <li key={item.id}>{item.date}: {item.status}</li>
                    ))}
                </ul>
            </div>
        );
    };
export default AttendanceList;