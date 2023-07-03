const express = require('express');
require('dotenv').config();
const app = express();
require('./models/config')
const mainRouter = require('./routers/mainRouter')
const userModel = require('./models/userSchema')
app.use(express.json())
app.use('/', mainRouter)
userModel.sync({ alter : true })

app.listen(process.env.PORT, ()=>{
    console.log(`server running on port number : ${process.env.PORT}`)
})