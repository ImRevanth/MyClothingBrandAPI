const express = require('express');
const dbConnect = require('./configs/db.connect')
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const router = require('./routes/authRoute');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middleware/errorHandler');

dbConnect()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extender:'false'}))
app.use('/api/user',router)
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=> {
  console.log(`server is running at port ${PORT}`)
})