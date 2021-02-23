const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./models/User')
require('./models/Blog')
require('./services/passport')


const authRoutes = require('./routes/authRoutes')
const homepageRoutes = require('./routes/homepage')
const blogRoutes = require('./routes/blog')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

const app = express();

app.set('view engine','ejs')
app.use(
   cookieSession({
      maxAge: 30*24*60*60*1000,
      keys: [keys.cookieKey]
   })
)
app.use(passport.initialize())
app.use(passport.session())

homepageRoutes(app)
authRoutes(app)
blogRoutes(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);
