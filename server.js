const express = require("express");
const app = express();
const data = require("./data");

// // Your JSON data
// const data = {
//   "spotlights": [
//     // Your spotlight data here
//   ],
//   "jobs": [
//     // Your job data here
//   ]
// };

// Middleware to parse JSON in request body
app.use(express.json());

// Define routes

// Route to get all spotlights
app.get("/spotlights", (req, res) => {
  res.json(data.spotlights);
});

// Route to get all jobs
app.get("/jobs", (req, res) => {
  res.json(data.jobs);
});

// Route to get a specific job by ID
app.get("/jobs/:id", (req, res) => {
  const jobId = parseInt(req.params.id);
  const job = data.jobs.find((job) => job.id === jobId);

  if (!job) {
    res.status(404).json({ message: "Job not found" });
  } else {
    res.json(job);
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
