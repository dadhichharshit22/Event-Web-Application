import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import authRoutes from './routes/userRoutes'
import eventRoutes from './routes/eventRoutes';
import registrationRoutes from './routes/registrationRoutes';
import bodyParser from 'body-parser'

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/registrations', registrationRoutes);

// Connect to database and start server
const PORT = process.env.PORT || 3000;


// start 
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to the server:', error);
    process.exit(1);
  }
};
// start the server and connect the database
startServer();

