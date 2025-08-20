import express from 'express';
import userRoutes from './routes/userRoutes'
import attendaceRoutes from './routes/attendanceRoutes'
import { errorHandler } from './middlewares/errorHandler';
import { authentication } from './middlewares/authMiddleware';

const app = express();

app.use(express.json());

app.use('/api/attendances', authentication, attendaceRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

export default app;