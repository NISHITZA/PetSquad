const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('user')

passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    (accessToken, refreshToken, profile, done)=>{
        User.findOne({ email: profile._json.email })
            .then((existingUser)=>{
                if(existingUser){
                    //profile is present
                    done(null, existingUser)
                }
                else{
                    //profile is not present (new user)
                    new User({ 
                        googleId: profile.id,
                        name: profile.name.givenName,
                        email: profile._json.email,
                    })
                        .save()
                        .then(user=> done(null, user))
                }
            })
    })
);
