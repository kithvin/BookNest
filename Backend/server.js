import express from 'express'; // Import Express framework
import "dotenv/config"; // Load environment variables from .env file
import cors from "cors"; // Import CORS to handle cross-origin requests
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './middleware/clerkWebhooks.js';

connectDB();

// Initialize Express app
const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors()); 

// Middleware
app.use(express.json());
app.use(clerkMiddleware());

// API to listen to Clerk webhoos
app.use("/api/clerk", clerkWebhooks)

// Define a basic route for testing the backend
app.get('/', (req,res)=> res.send("API is Working Backend OK"));

// Define server port from .env or fallback to 5000
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
