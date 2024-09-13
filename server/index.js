const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors')
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');

const setupAndStartServer = async()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true
      }));

    app.use('/api', ApiRoutes);
    // app.get('/api/car', (req, res) => {
    //     res.send('This is the car API');
    // });


    app.listen(PORT, async ()=>{
          console.log(`Server running at ${PORT}`);
        //     if(process.env.SYNC_DB){
        //     db.sequelize.sync({alter: true, force:false });
        //   }
    })
}

setupAndStartServer();