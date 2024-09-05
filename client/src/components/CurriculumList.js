// src/components/CurriculumList.js
import React, { useEffect, useState } from 'react';
import { getCurriculums } from '../apiService';

const CurriculumList = () => {
    const [curriculums, setCurriculums] = useState([]);

    useEffect(() => {
        getCurriculums().then(response => {
        setCurriculums(response.data);
        }).catch(error => {
        console.error('Error fetching curriculums:', error);
        });
    }, []);

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