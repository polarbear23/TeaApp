require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
//import routers
const userRouter = require('./routes/user');
const teaRouter = require('./routes/tea');


const SERVER_STATUS = require('./config.js');

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

//This will create a middleware.
//When you navigate to the root page, it will use the built react-app
if (process.env.NODE_ENV !== 'development') {
    app.use(express.static(path.resolve(__dirname, '../../build')));
}

if (process.env.NODE_ENV === 'development') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}
//routers
app.use('/user', userRouter);
app.use('/tea', teaRouter);

app.get('*', (req, res) => {
    res.json({ ok: true });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`\n ${SERVER_STATUS.STARTED} ${port}\n`);
});
