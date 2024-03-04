// dependencies
require('dotenv').config();
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const expsesh = require('express-session');

const cors = require('cors')

const SequelizeStore = require('connect-session-sequelize')(expsesh.Store);
const sequelize = require('./config/connection');

// routes global variables
const routes = require('./controllers/homepageController');
const jobCardRoute = require('./controllers/jobCardController');

// handlebars init
const hbs = exphbs.create({});
const viewsPath = path.join(__dirname, './views');
hbs.handlebars.registerHelper('dateFormat', function (dateTime) {
    if (!dateTime) {
        return "N/A";
    }
    let date = new Date(dateTime);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
});

hbs.handlebars.registerHelper('formatStringData', function (data) {
    if (!data) {
        return "N/A";
    }
    return data;
});

hbs.handlebars.registerHelper('moneyFormat', function (value) {
    if (!value) {
        return "N/A";
    }
    return `$${parseInt(value).toFixed(2)}`;
});

// express session settings

const sessionSettings = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    // maxAge: sesh_expiration_time_millisec,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

const app = express();

const PORT = process.env.PORT || 3001;

// handlebars template engine
app.engine('handlebars', hbs.engine);
app.set('views', viewsPath);
app.set('view engine', 'handlebars');

// middlewares
app.use(cors());
app.use(express.static('public'));

app.use(expsesh(sessionSettings));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// jobform page (home), and jobCard page
app.use(routes);
app.use(jobCardRoute);

// server listener + sequelize sync
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Go to http://localhost:3001/'));
});