const Blog = require('./../models/Blog')

module.exports = (app) =>{
    app.get('/blog', (req,res)=>{
        res.render('./../frontend/bloghome.ejs')
    })
}
