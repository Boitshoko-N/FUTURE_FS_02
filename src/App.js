import React from 'react';
import LeadCard from './components/LeadCard';
import logo from './logo.svg';
import './App.css';

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
        <Route> path="/dashboard" element={<Dashboard/>}</Route>
      </Routes>
    </Router>
  )
}

export default App;
