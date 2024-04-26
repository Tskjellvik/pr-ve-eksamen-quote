const { perReg } = require("../handlers/dbHandler")

const inex = (req, res, next)=>{ 
    perReg((result)=>{
        res.render("index.ejs", {result})
    })
}

const logginn = (req, res, next)=>{ 
    perReg((result)=>{
        res.render("logginn.ejs", {result,message:'test'})
    })
}

const signup = (req, res, next)=>{ 
    perReg((result)=>{
        res.render("signup.ejs", {result,message:'test'})
    })
}

const logginn_get = (req, res) => {
    res.render("logginn.ejs", {message:'test'})
}

module.exports = {
    inex,
    logginn,
    signup,
    logginn_get
}


