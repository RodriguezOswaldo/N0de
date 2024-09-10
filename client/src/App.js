import React from 'react';
import Greeting from './Greeting';
import AttendanceList from './components/AttendanceList';
import ProjectsList from './components/ProjectList';
import CurriculumList from './components/CurriculumList';


function App() {
  return (
    <div className="App">
      <Greeting/>
      
      <AttendanceList/>
      <ProjectsList/>
      <CurriculumList/>
    </div>
  );
}

export default App;
