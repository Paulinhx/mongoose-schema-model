import express from "express";
import mongoose from  "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postsRoutes from './routes/postsRoutes.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;
//const CONNECTION_URL="mongodb+srv://Paulinhx:<password>@cluster0.dofhovk.mongodb.net/record-shop?retryWrites=true&w=majority"

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.use("/post", postsRoutes);

mongoose
.connect(process.env.CONNECTION_URL)
.then(()=>
app.listen(PORT, () => console.log(`Database connected and Server running on port: `, PORT)),
)
.catch(error=>console.log(error));
