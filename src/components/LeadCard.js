import React, { useState } from "react";
import API from "../services/api";

function LeadCard({ lead, refresh }) {
  const [note, setNote] = useState("");

  const updateStatus = async (status) => {
    await API.put(`/leads/${lead._id}`, { status });
    refresh();
  };

  const addNote = async () => {
    await API.put(`/leads/${lead._id}`, { note });
    refresh();
  };

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h4>{lead.name}</h4>
      <p>{lead.email}</p>
      <p>Source: {lead.source}</p>
      <p>Status: {lead.status}</p>

      <button onClick={() => updateStatus("New")}>New</button>
      <button onClick={() => updateStatus("Contacted")}>Contacted</button>
      <button onClick={() => updateStatus("Converted")}>Converted</button>

      <input placeholder="Add note" onChange={(e) => setNote(e.target.value)} />
      <button onClick={addNote}>Save Note</button>

      <p>Notes: {lead.note}</p>
    </div>
  );
}

export default LeadCard;