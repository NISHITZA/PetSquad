const passport = require('passport')

module.exports = (app) =>{
    app.get('/auth/google', passport.authenticate('google',{
      scope: ['profile', 'email']
      })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google',
        {
            failureRedirect:'/',
            successRedirect:'/surveys'
        })
    );

    app.get('/api/current_user', (req,res)=>{
        res.send(req.user);
    })

    app.get('/api/logout', (req,res)=>{
        req.logout()
        res.redirect('/')
    })

    // app.get('/loginSuccess', (req,res)=>{
    //     res.render('../frontend/auth/googleSuccess.ejs')
    // })
}
