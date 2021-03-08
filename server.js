if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index'); // the CONTROLLER route handler, user.js
const aboutRouter = require('./routes/about');  // 
const contactRouter = require('./routes/contact');

app.set('view engine', 'ejs');              // view engine is ejs
app.set('views', __dirname + '/views');     // ejs views found here
app.set('layout', 'layouts/layout');        // layout is found here; common stuff

app.use(expressLayouts);
app.use(express.static( __dirname + '/public'));          // where to find .css 
app.use(bodyParser.urlencoded({limit: '10mb', extended:false}));

// *******************************************************************************
// calls the indexRouter or author Router for all express routes (GET,POST,PUT)
app.use('/', indexRouter);                   // use the router
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
//app.use more routes
//****************************************************************************** */

// db for the MODEL  *********************************************************
const mongoose = require('mongoose');       // this is MODEL part
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const db =  mongoose.connection;

db.on('error', error => console.error(error));
db.once('open',() => console.log('Connected to Mongoose'));
//******************************************************************************* */

app.listen(process.env.PORT || 3000);
