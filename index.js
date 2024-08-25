const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
const attendance = require('./models/attendance');
const projects = require('./models/project');
const curriculum = require('./models/curriculum');




// Example routes for curriculums
app.get('/api/curriculums', async (req, res) => {
    try {
        const result = await curriculum.getAllCurriculums();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch curriculums' });
    }
});

app.post('/api/curriculums', async (req, res) => {
    try {
        const { title, description, startDate, endDate } = req.body;
        await curriculum.addCurriculum(title, description, startDate, endDate);
        res.status(201).json({ message: 'Curriculum added' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add curriculum' });
    }
});
// Example routes
app.get('/api/attendance', async (req, res) => {
    try {
        const result = await attendance.getAllAttendance();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch attendance' });
    }
});

app.post('/api/attendance', async (req, res) => {
    try {
        const { studentName, status } = req.body;
        await attendance.addAttendance(studentName, status);
        res.status(201).json({ message: 'Attendance added' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add attendance' });
    }
});

app.get('/api/projects', async (req, res) => {
    try {
        const result = await projects.getAllProjects();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

app.post('/api/projects', async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        await projects.addProject(title, description, dueDate);
        res.status(201).json({ message: 'Project added' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add project' });
    }
});
app.use(cors());
app.use(express.json());

app.get('/api/greeting', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
