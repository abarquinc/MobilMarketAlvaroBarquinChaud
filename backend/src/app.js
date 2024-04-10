const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
const mainRoutes = require("./routes/mainRoutes");
const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require('./routes/productsRoutes')
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const cors = require('cors')

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


// const db = require('../database2/models')


app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(cors());

app.use(cookies());

app.use(userLoggedMiddleware)

app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));


//elementos estaticos

app.use(express.static(path.resolve(__dirname, '../public')));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", mainRoutes);
app.use('/', productsRoutes);
app.use('/', usersRoutes)




//levantamos el sv
app.listen(port, () => {
	console.log('Servidor levantado en el puerto http://localhost:'+ port)
	// db.sequelize.sync({force: true})
});