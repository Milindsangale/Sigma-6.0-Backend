const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sigma_app',
    password: 'Milind@9699',
  });


  // insert data into the table
let q = "INSERT INTO  user (id, username, email, password) values ?";
/* let users =[
["12345fsfs","123_newuser","smilind9699@gmail.ocm","abc"],
["1234565465","123_newuser","smilind9699@gmail.ocm","abc"],
]; */
let  getRandomUser = () => {
    return [  
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
   
];
  };
  
let data  =[];
for (let i = 0; i < 50; i++) {
   data.push(getRandomUser());   //2000  random dta
}


try {
    connection.query(q, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
      });
  } catch (err) {
    console.error(err);
  }

  connection.end();



/*   console.log(getRandomUser()); */