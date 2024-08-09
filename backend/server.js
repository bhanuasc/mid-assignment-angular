const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
 
const app = express();
app.use(cors());
app.use(bodyParser.json());
 
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://ecommerce-ascendion:Gmvak78925!%40asc@asc-commerce-cluster.yhhhzoo.mongodb.net/?retryWrites=true&w=majority&appName=asc-commerce-cluster';
 
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});
 
// Define a User schema and model
const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
});
 
const User = mongoose.model('User', userSchema);
 
// API endpoint to get users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 
