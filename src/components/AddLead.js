import React, { useState } from "react";
import API from "../services/api";

function AddLead(){
    const[lead,setlead] = useState({
        name:"", email:"", source:""
    });

    const handleSubmit =  async() => {
        await API.post("/leads", lead);
        window.location.reload();
    };

    return(
        <div>
            <h3>Add New Lead</h3>
            <input placeholder="Name" onChange={(e) => setlead({...lead, name: e.target.value})}/>
            <input placeholder="Email" onChange={(e) => setlead({...lead, email: e.target.value})}/>
            <input placeholder="Source" onChange={(e) => setlead({...lead, source: e.target.value})}/>
            <button onClick={handleSubmit}>Add Lead</button>
        </div>
    );
}
export default AddLead;