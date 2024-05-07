const { perReg } = require("../handlers/dbHandler")
const user = require("../models/users")
const result = ['hai'];

const inex = (req, res, next)=>{ 
    res.render("index.ejs", {result})
}

const logginn = (req, res, next)=>{ 
    res.render("logginn.ejs", {result,message:'test'})

}

const signup = async(req, res, next)=>{ 
    console.log('trying to sign in!')
    const{username, password, post} = req.body;
    console.log("Space");
    let result = await user.create({username, password, post});
    //console.log(result);
    res.end();
}

const upage = (req, res, next)=>{ 
    res.render("upage.ejs", {result})
}

// const logginn_get = (req, res) => {
//     res.render("logginn.ejs", {message:'test'})
// }

module.exports = {
    inex,
    logginn,
    signup,
    upage,
    //logginn_get
}


