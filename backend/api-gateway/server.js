import express from 'express';
import proxy from 'express-http-proxy';
import cors from 'cors';
const app = express();  
app.use(cors());
app.use(express.json());

// Proxy to Auth Service
app.use('/auth', proxy('http://auth-service:5001', {
    proxyReqPathResolver: function (req) {
        return '/auth' + req.url;
    }
}));



app.listen(4000, () => {
    console.log('API Gateway running on port 4000');
});