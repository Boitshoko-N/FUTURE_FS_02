import React from 'react';
import LeadCard from './components/LeadCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';


function App() {
  return (
    <div>
      <h1>Client Lead Management System</h1>

      <LeadCard name="Jack Smith" email="jack.smith@gmail.com" status="New"/>
      <LeadCard name="Emily Davis" email="emily.davis@gmail.com" status="Contacted"/>
    </div>
  );
}

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route> path="/dashboard" element={<Dashboard/>}</Route>
      </Routes>
    </Router>
  )
}

export default App;
