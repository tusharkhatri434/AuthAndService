const express = require('express');
const bodyParser = require("body-parser");
const apiRoutes= require('./routes/index');
const {PORT} = require('./config/serverConfig');

// const db = require('./models/index');

//  const {User,Role} = require('./models/index');
//  const bcrypt = require('bcrypt');

const setUpServer = async ()=>{
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);
    
    app.listen(PORT, async ()=>{
      console.log(`server is listing on ${PORT}`);
        // const incomingpassword = '12345';
        // const user = await User.findByPk(2);
        // const response = bcrypt.compareSync(incomingpassword, user.password);
        // console.log(response);

        // if(process.env.DB_sync){
        //   db.sequelize.sync({ alter: true });
        // }

        // const u1 = await User.findByPk(1);
        // const r1 = await Role.findByPk(2);
        // // u1.addRole(r1);
        // const response = await u1.hasRole(r1);
        // console.log(response);

    });
}


setUpServer();