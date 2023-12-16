const express = require('express');
const bodyParser = require("body-parser");
const apiRoutes= require('./routes/index');
const {PORT} = require('./config/serverConfig');

const setUpServer = async ()=>{
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);
    
    app.listen(PORT, async ()=>{
        console.log(`server is listing on ${PORT}`);
    });
}

setUpServer();