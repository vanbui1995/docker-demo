const http = require('http');
const port = process.env.PORT || 3000;

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
});

console.log('Current envs', {
  host: process.env.SQL_HOST,
  user: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
})

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello world!');
});


const connectAndQuery = () => {
  con.connect((error) => {
    if (error) {
      console.log('Connect éo được bạn êi 😭', error);
    } else {
      console.log('Ngon lành cành đào không lỗi nhé 😍');
      setInterval(() => {
        con.query('SELECT * FROM todo;', function (err, result) {
          if (err) throw err;
          console.log("Todos: " + JSON.stringify(result));
        });
      }, 3000);
    }
   
  });
}

server.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}/`);
  connectAndQuery();
  // Không support promise chịu khó nhìn callback hell nhé
  
});
