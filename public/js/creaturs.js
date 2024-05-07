const user = require("../../models/users")
const mongo = "mongodb://10.12.10.111:27017/?directConnection=true&appName=mongosh+2.2.3";




user.create(
    {
        name: "admin",
        email: "admin@admin",

        password: "admin",

        role: "admin"
    }
)