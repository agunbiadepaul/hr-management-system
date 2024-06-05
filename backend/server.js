const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = 'mongodb+srv://agunbiadepaul94:<herbaryourmeatlas>@apaprem.gwgnh4p.mongodb.net/?retryWrites=true&w=majority&appName=apaprem'

const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const authRoutes = require('./routes/auth');

// Set up routes
app.use('/api/auth', authRoutes);

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/employee', require('./routes/employeeRoutes'));
app.use('/api/hr', require('./routes/hrRoutes'));


mongoose.connect(uri, process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas', error);
});

app.get('/', (req, res) => {
  res.send('HR Management System API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
