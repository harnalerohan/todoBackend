require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mainRouter = require('./src/router/main.router');
const { connectToDb } = require('./src/db/config.db');
const app = express();

const PORT = process.env.PORT || 6000
app.use(cors());
app.use(express.json())
connectToDb();
app.use('/', mainRouter)

app.get('/ping', (req, res) => {
    res.json({
        status: 'success',
        data: {
            message: 'pong',
        },
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});