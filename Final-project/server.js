
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/db');
const productroute = require('./routes/productroutes');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/pro',productroute);
connectdb();

app.get('/',(req,res)=>{
    res.send("api is working");
});

const port = process.env.PORT || 5600;
app.listen(port,()=> {
    console.log("server is running port 5600");
});
