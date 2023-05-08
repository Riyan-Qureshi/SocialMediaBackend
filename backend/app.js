import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user-routes'
import blogRouter from './routes/blog-routes'
const app = express();

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
mongoose.connect(
    "mongodb+srv://admin:Pcn0A5IJVxtmlU4k@cluster0.qucqqaf.mongodb.net/Blog?retryWrites=true&w=majority"
    )
    .then(() => app.listen(5000))
    .then(() => console.log("Connected to Database and Listening to Localhost 5000")
    )
    .catch((err) => console.log(err));

//Pcn0A5IJVxtmlU4k