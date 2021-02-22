module.exports = (app) =>{
    app.get('/', (req,res)=>{
        res.render('./../frontend/homepage.ejs')
    })
}
