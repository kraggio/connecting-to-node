const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting to MySQL database: ${err.message}`);
    return;
  }

  console.log("Connected to MySQL database");
});

class dbService {
  static getDBService() {
    //is there an instance of the dbservice, if there is no dbservice, create a new one
    return instance ? instance : new dbService();
  }
  getAllData = () => {
    const selAllQuery = "SELECT * FROM Persons;";
    //tell the connection query what query we are going to run
    connection.query(selAllQuery, (err, results) => {
      if (err) {
        console.error(`${err.message}`);
        return;
      }
      return results;
    });
  };
}

// module.exports = connection;

// connection.connect((err) => {
//   if (err) {
//     console.log(err.message);
//   }

//   console.log(connection.state);
// });

module.exports = dbService;
