import express from 'express';
import { signup, login } from '../auth-service/auth.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await signup(email, password);
        res.status(201).json({ user });
    }catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await login(email, password);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



export default router;
