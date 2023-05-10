import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbLink = process.env.DB_LINK;
const connectToDb = () => {
    mongoose
  .connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
    process.exit(1);
  });

}

export default connectToDb