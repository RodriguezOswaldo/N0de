const db = require('../db');

// Example query functions
const getAllCurriculums = () => db.any('SELECT * FROM curriculum');
const addCurriculum = (title, description, startDate, endDate) => db.none('INSERT INTO curriculum(title, description, start_date, end_date) VALUES($1, $2, $3, $4)', [title, description, startDate, endDate]);

module.exports = { getAllCurriculums, addCurriculum };