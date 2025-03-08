const mysql = require("mysql2");

DB_HOST='127.0.0.1'
DB_USER='root'
DB_PASSWORD='SurjeetSingh@2003'
DB_NAME='kul'
DB_PORT=3306






// Create MySQL connection pool
const pool = mysql.createPool({
  host:'localhost',
  user: 'root',
  password: 'SurjeetSingh@2003',
  database: 'kul',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Check if the database is connected
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL database!");
    connection.release(); // Release the connection
  }
});


