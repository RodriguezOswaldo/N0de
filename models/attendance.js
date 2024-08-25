const db = require('../db');

const getAllAttendance = () => db.any('SELECT * FROM attendance');
const addAttendance = (studentName, status) => db.none('INSERT INTO attendance(student_name, status) VALUES ($1, $2)', [studentName, status]);

module.exports = {getAllAttendance, addAttendance};