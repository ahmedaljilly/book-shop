const path =require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
//const rootDir=require('./util/path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errRoutes = require('./routes/404');


app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(errRoutes);

app.listen(3000);

