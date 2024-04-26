const user = require("../../models/users")
const mongo = "mongodb://10.12.99.10:27017/?directConnection=true&appName=mongosh+2.2.5";




user.create(
    {
        name: "admin",
        email: "admin@admin",

        password: "admin",

        role: "admin"
    }
)