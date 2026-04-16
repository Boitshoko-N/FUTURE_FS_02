import React from 'react';
import LeadList from "./LeadList";
import AddLead from "./AddLead";

function Dashboard(){
    return(
        <div className="dashboard">
            <div className="header">CRM Dashboard</div>

            <div className="section">
                <h3>Add New Lead</h3>
                <AddLead/>
            </div>

            <div className="section">
                <h3>All Leads</h3>
                <LeadList/>
            </div>
        </div>
    );
}

export default Dashboard;