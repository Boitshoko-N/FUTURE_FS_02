const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crm");

const Lead = require("./models/Lead");

// GET all leads
app.get("/api/leads", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

// CREATE lead
app.post("/api/leads", async (req, res) => {
  const newLead = new Lead({
    ...req.body,
    status: "New"
  });
  await newLead.save();
  res.json(newLead);
});

// UPDATE lead
app.put("/api/leads/:id", async (req, res) => {
  const updated = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

app.listen(5000, () => console.log("Server running on port 5000"));