const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const patientRoutes = require("./routes/patientRoutes"); 
const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Use patient routes
app.use('/api/patients', patientRoutes);

//Mongo Connection 
mongoose.connect("mongodb+srv://doctor:Doctor%40123@cluster0.vji1eqw.mongodb.net/patient?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Doctor App Backend is running ✅");
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});