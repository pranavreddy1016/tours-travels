const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(express.static("public"));

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password@1016",
    database: "proj_new"
});

// Connect MySQL
db.connect((err) => {
    if (err) {
        console.log("❌ MySQL Connection Failed");
        console.log(err.message);
        return;
    }

    console.log("✅ MySQL Connected Successfully");
});

// Insert User
app.post("/users", (req, res) => {

    const { name, mobile, email } = req.body;

    const sql = `
        INSERT INTO users (name, mobile, email)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [name, mobile, email], (err, result) => {

        if (err) {
            console.log("❌ Insert Error:", err.message);

            return res.status(500).json({
                message: "Data insert failed"
            });
        }

        res.json({
            message: "User inserted successfully",
            id: result.insertId
        });
    });
});

// Start Server
app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});