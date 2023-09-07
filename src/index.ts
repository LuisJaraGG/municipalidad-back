import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { dbConnected } from './database/db';

import userRouter from './routes/user.route';
import authRouter from './routes/auth.route';
import roleRouter from './routes/role.route';

dotenv.config();

const corsOptions = {
	origin: process.env.FRONTEND_URL,
};

const app = express();
//Base de datos
dbConnected();

//Middlewares
app.use(cors(process.env.NODE_ENV !== 'development' ? corsOptions : {}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
// 	fileUpload({
// 		useTempFiles: true,
// 		tempFileDir: '/tmp/',
// 		createParentPath: true,
// 	})
// );

//Rutas
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/role', roleRouter);

//Servidor
app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
