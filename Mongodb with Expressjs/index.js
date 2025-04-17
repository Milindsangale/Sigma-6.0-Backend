const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

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

let chat1 = new Chat({
    from:"John",
    to:"Doe",
    message:"Hello",
    createdAt: new Date(),
});

chat1.save()
.then((res) => {
    console.log('Chat saved successfully!',res);
})
.catch((err) => {
    console.error('Error saving chat:', err);
}); 


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
  





