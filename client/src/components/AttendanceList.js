import React, {useEffect, useState} from 'react';
import { getAttendance } from '../apiService';
import { response } from 'express';

const AttendanceList = () =>{
    const [attendance, setAttendance] = useState([]);

    useEffect(()=>{
        getAttendance().then(response =>{
            setAttendance(response.data);
        }).catch(error =>{
            console.error('Error fetching attendance:', error);
        });
    }, []);
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