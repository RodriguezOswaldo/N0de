import React, {useEffect, useState} from 'react';
import { getProjects } from '../apiService';

const ProjectList =()=>{
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        getProjects().then(response=>{
            setProjects(response.data);
        }).catch(error=>{
            console.error('Error fetching projects:', error);
        });
    }, []);
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