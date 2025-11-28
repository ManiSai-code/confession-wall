const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// 1. MIDDLEWARE
app.use(express.json());
app.use(cors());

// 2. DATABASE CONNECTION
// REPLACE THIS STRING WITH YOUR OWN FROM MONGODB ATLAS
const MONGO_URL = "mongodb+srv://admin:Password123@cluster0.qp1y1fd.mongodb.net/?appName=Cluster0";

mongoose.connect(MONGO_URL)
    .then(() => console.log("✅ Connected to MongoDB Cloud"))
    .catch(err => console.error("❌ DB Connection Error:", err));

// 3. DEFINE THE "SCHEMA" (What a confession looks like)
const ConfessionSchema = new mongoose.Schema({
    text: String,
    date: { type: Date, default: Date.now }
});

const Confession = mongoose.model('Confession', ConfessionSchema);

// 4. ROUTES

// GET: Fetch all confessions
app.get('/api/confessions', async (req, res) => {
    const messages = await Confession.find().sort({ date: -1 }); // Newest first
    res.json(messages);
});

// POST: Save a new confession
app.post('/api/confessions', async (req, res) => {
    const newMessage = new Confession({ text: req.body.text });
    await newMessage.save();
    res.json(newMessage);
});

// 5. START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));