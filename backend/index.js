import express from "express";
import orderRoute from "./routes/order.js";
import dotenv  from 'dotenv'
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import {port} from './contants/contant.js'


export const app = express();

dotenv.config();

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
  )
);


app.use(bodyParser.raw({ type: 'application/json' }));
app.use('/', orderRoute)



const ports = process.env.PORT || 3301;  
// // Server is on
app.listen(port, () => {
  console.log('Server is running on port',port);
});



app.get("/", (req, res) => {
  res.send("Nice working");
});
