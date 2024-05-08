import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
const UserModel = require('./models/Usermodel')
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req:Request, res:Response) => {
		res.send("got cd")
});
app.listen(3000, () => {
	console.log('server is running and here we gos')
})
