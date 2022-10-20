// get the client

const mySQL2 = require("mysql2/promise")


const connectDB = async () => {


    // create the connection to database

    const connection = await mySQL2.createConnection({

        // Credenciales
        host: "us-east.connect.psdb.cloud",
        user: "o3r5q2olfil3b54sfpvt",
        password: "pscale_pw_y15bb6eVUGz4ETZSHVKWFzTOIT6sKlX0k02VEc1IgCH",
        database: "expresscourse",
        ssl: { rejectUnauthorized: false}
    })

    // simple query

    const result = await connection.query("SELECT 5 + 5 AS result")
    console.log(result);
}

module.exports = connectDB