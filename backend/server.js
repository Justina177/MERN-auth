import express from "express";
import dotenv from "dotenv";
dotenv.config()
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
// import { connect } from './config/db.js';
import connect from './config/db.js';
const PORT = process.env.PORT || 4000;

 connect()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }))


app.use('/api/users', userRoutes);

app.get('./', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => 
  console.log(`Server started on PORT ${PORT}`));
