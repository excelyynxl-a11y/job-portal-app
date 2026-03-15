// file for the main entry point in a Node.js application 
// used to configure and start a web server
// contains core logic for listening for network request, processing and sending response back to client (frontend)
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware to handle CORS 
app.use(
    cors({
        origin: '*',
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// connect database 
connectDB();

// middleware
app.use(express.json());

// routes 
// app.use("/api/auth", authRoutes);

// serve upload folders
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

// start server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));

