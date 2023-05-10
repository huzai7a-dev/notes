import express from 'express';
import notesRoutes from './routes/note.js';
import dotenv from 'dotenv';
import connectToDb from './config/db.js';
import handleError from './middlewares/handleError.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/notes', notesRoutes);

connectToDb()

app.use(handleError);

app.listen(port, () => console.log(`App listening on port ${port}`));

