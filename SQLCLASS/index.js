const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');


app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));


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
  
/* let data  =[];
for (let i = 0; i < 50; i++) {
   data.push(getRandomUser());   //2000  random dta
}
 */


// Home Page
  app.get('/', (req, res) => {
    let q = "SELECT count(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
           let count= result[0] ["count(*)"];
           /*  res.send("milindsnaga"); */
           res.render("home.ejs",{count});
           /*  res.send(result[0] ["count(*)"]); */
          });
      } catch (err) {
        console.error(err);
        res.send('Error occurred while fetching data');
      }
    /* res.send('Welcome the home page!'); */
  });


  //Show Rout
app.get('/user', (req, res) => {
    let q = "SELECT * FROM user";
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            /* res.send(result); */
             res.render("user.ejs",{users}); 
          });
      } catch (err) {
        console.error(err);
        res.send('Error occurred while fetching data');
      }
  });


  //EDIT ROUTE
app.get('/user/:id/edit', (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
          let user = result[0];
            res.render("edit.ejs", {user}); 
          });
      } catch (err) {
        console.error(err);
        res.send('Error occurred while fetching data');
      }
});


//UPDATE ROUTE
app.patch('/user/:id', (req, res) => {
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;

    let q = `SELECT * FROM user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
          let user = result[0];
           if (formPass != user.password) {
            res.send("password is not correct");
           }else {
            //query to update the username
            let q2 = `UPDATE user SET username='${newUsername}' where id='${id}'`;
            connection.query(q2, (err, result) => {
                if (err) throw err;
                res.redirect("/user");
               /*  res.redirect('/user'); */
            });
           }
          });
      } catch (err) {
        console.error(err);
        res.send('Error occurred while fetching data');
      }

});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
