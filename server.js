const express = require('express');
const app = express();
const port = 4000;
const restRouter = require('./routes/restapi.route');
const db = require('./database/database');


app.use(express.json());
app.use('/restapi', restRouter);


app.listen(port, () => {
    console.log("Server was listening at port: " + port);
})