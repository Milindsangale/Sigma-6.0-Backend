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
    name: String, 
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


//find

/* User.find({name:"sanika",email:"tony@gmail.com"})
    .then((res) => {
        console.log( res[0]);
    })
    .catch((err) => {
        console.error(err);
    }); */

    // find by ID
/* User.find({  _id:"67fabfa806073106bc0fce51",_id:"67fabfa806073106bc0fce50"})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    }); */

// update by ID
/* User.updateOne({ _id: "67fabfa806073106bc0fce51" },{age:100})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    }); */

    //delate
User.deleteOne({ _id: "67faba82a88a54af56cd725f" })
    .then((res) => {
        console.log('User deleted successfully!',res);
    })
    .catch((err) => {
        console.error('Error deleting user:', err);
    });



    User.deleteOne({ email: "smilind9699@gmail.com" })
    .then((res) => {
        console.log('User deleted successfully!',res);
    })
    .catch((err) => {
        console.error('Error deleting user:', err);
    });




// Save the user to the database

/* user2
    .save()
    .then((res) => {
        console.log('User saved successfully!',res);
    })
    .catch((err) => {
        console.error('Error saving user:', err);
    });

 */

    //update

User.updateOne({ _id: "680138879a1fc561f880fe96" },{price:100})
    .then((res) => {
        console.log('update',res);
    })
    .catch((err) => {
        console.error('error',err);
    });