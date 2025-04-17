const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
main()
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(() => {
    console.error('Error connecting to MongoDB:', err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whasapp');
};

let chat = [
    {
        from:"John1",
        to:"Doe",
        message:"Hello",
        createdAt: new Date(),
    },
    {
        from:"John2",
        to:"Doe",
        message:"Hello",
        createdAt: new Date(),
    },
    {
        from:"John3",
        to:"Doe",
        message:"Hello",
        createdAt: new Date(),
    },
    {
        from:"John4",
        to:"Doe",
        message:"Hello",
        createdAt: new Date(),
    },
    
    
];

Chat.insertMany(chat);

