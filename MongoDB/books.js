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
  await mongoose.connect('mongodb://127.0.0.1:27017/amezon');
};

// define the schema for the book collection
// Create a schema for the user collection
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },     
    rating: {
        type: Number,
    },
    createdAt: {
        type: Number,
        default: 0,
    },
});

const Book = mongoose.model('Book', BookSchema);



// Create a new book instance
/*  let book1 = new Book({
    title:"Milind Sangale - The Complete Guide to MongoDB",
    author:"Milind Sangale",
    price: 75000,
    rating: 4.55,
});

 book1.save()
    .then((res) => {
        console.log('Book saved successfully!',res);
    })
    .catch((err) => {
        console.error('Error saving book:', err);
    }); 
 */
 // delete

/*   Book.deleteOne({ _id: "67fffec42e9eb004cbaf06e0" })
    .then((res) => {
        console.log('User deleted successfully!',res);
    })
    .catch((err) => {
        console.error('Error deleting user:', err);
    });
 */
    
/*     Book.deleteMany({ author: "Milind Sangale", price: { $gte: 500 } })
    .then((res) => {
        console.log('User deleted successfully!',res);
    })
    .catch((err) => {
        console.error('Error deleting user:', err);
    });
 */


//update

Book.findByIdAndUpdate({ _id: "68000252f3d1356c3cdc7ab5" },{author:'Milind Sangale'})
    .then((res) => {
        console.log('update',res);
    })
    .catch((err) => {
        console.error('error',err);
    });