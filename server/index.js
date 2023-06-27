const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/config');
const cors = require('cors');

dotenv.config();
connectDb();

const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors());


app.use("/api/pizzas" , require("./routes/pizzaRoute"));
app.use("/api/user" , require('./routes/userRoute'));

app.get('/',(req , res)=>{
    res.send('hii');
})

const Port = process.env.Port || 8080;

app.listen(Port , () => {
    console.log('running');
})