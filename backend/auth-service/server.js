import express from 'express';
import authRoutes from '../services/authService.js';
import cors from 'cors';
const app = express();
app.use(cors())
app.use(express.json());


app.use('/auth', (req, res, next) => {
    console.log(`Request method: ${req.method}`);
    console.log(`Request URL: ${req.originalUrl}`);
    console.log(`Request body: ${JSON.stringify(req.body)}`);
    next();
})

app.use('/auth', authRoutes);



app.listen(5001, () => {
    console.log('Auth service running on port 5001');
})