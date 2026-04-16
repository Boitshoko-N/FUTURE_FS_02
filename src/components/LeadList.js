import React, { useEffect, useState } from "react";
import API from "../services/api";
import LeadCard from "./LeadCard";

function LeadList() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const res = await API.get("/leads");
    setLeads(res.data);
  };

  return (
    <div>
      <h3>All Leads</h3>
      {leads.map((lead) => (
        <LeadCard key={lead._id} lead={lead} refresh={fetchLeads} />
      ))}
    </div>
  );
}

export default LeadList;