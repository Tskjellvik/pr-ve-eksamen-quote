const { perReg } = require("../handlers/dbHandler")

const inex = (req, res, next)=>{ 
    perReg((result)=>{
        res.render("index.ejs", {result})
    })
}


module.exports = {
    inex
}