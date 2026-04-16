import React from 'react';
import LeadList from "../components/LeadList";
import AddLead from "../components/AddLead";

function Dashboard(){
    return(
        <div>
            <h1>Dashboard</h1>
            <AddLead/>
            <LeadList/>
        </div>
    );
}