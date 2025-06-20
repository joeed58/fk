const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
