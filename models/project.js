const db = require('../db');

const getAllProjects = ()=> db.any('SELECT * FROM projects');

const addProject = (title, description, dueDate) => db.none('INSERT INTO projects(title, description, due_date) VALUES ($1, $2, $3)', [title, description, dueDate]);

module.exports = {getAllProjects, addProject}