import axios from 'axios';

const API_URL = 'https://localhost:4000/api'
export const getAttendance =()=> axios.get(`${API_URL}/attendance`);
export const getProjects =()=> axios.get(`${API_URL}/projects`);
export const getCurriculums =()=> axios.get(`${API_URL}/curriculums`);
