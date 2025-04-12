const mongoose = require('mongoose');

/* mongoose.connect('mongodb://127.0.0.1:27017/test'); */


main()
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(() => {
    console.error('Error connecting to MongoDB:', err);
});

 // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
};


// Create a schema for the user collection
const UserSchema = new  mongoose.Schema({
    Name: String, 
    email: String,
    age: Number,
  });

const User = mongoose.model('User', UserSchema);

// Create a new user instance
/* User.insertMany([
    {name:"sanika",email:"tony@gmail.com",age:50},
    {name:"Milind",email:"toffsny@gmail.com",age:550},
    {name:"NJDKKJ",email:"tonvdgy@gmail.com",age:55},

]) .then((res) => {
         console.log('User saved successfully!'); 
    })


     */



    

// Create a new user instance

// Create a new user instance
/* const user2 = new User({
    name:"sanika",
    email:"sanika9699@gmail.com",
    age: 25,
});


// Save the user to the database
user2
    .save()
    .then((res) => {
        console.log('User saved successfully!',res);
    })
    .catch((err) => {
        console.error('Error saving user:', err);
    });
 */

