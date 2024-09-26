// src/components/CurriculumList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurriculumList = () => {
    const [curriculums, setCurriculums] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${apiUrl}/api/curriculums`)
        .then(response => {
        setCurriculums(response.data);
        }).catch(error => {
        console.error('Error fetching curriculums:', error);
        });
    }, [apiUrl]);

    return (
        <div>
        <h1>Curriculums</h1>
        <ul>
            {curriculums.map(curriculum => (
            <li key={curriculum.id}>
                {curriculum.subject}: {curriculum.material}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default CurriculumList;