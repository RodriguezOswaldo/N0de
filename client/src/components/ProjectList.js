import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ProjectList =()=>{
    const [projects, setProjects] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        axios.get(`${apiUrl}/api/projects`)
        .then(response=>{
            setProjects(response.data);
        }).catch(error=>{
            console.error('Error fetching projects:', error);
        });
    }, [apiUrl]);
    return(
        <div>
        <h1>Projects</h1>
        <ul>
            {projects.map(project => (
            <li key={project.id}>
                {project.name}: {project.description}
            </li>
            ))}
        </ul>
    </div>
    );
};
export default ProjectList;