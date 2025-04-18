const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));  // for css
app.use(express.urlencoded({extended:true})); // for form data
app.use(methodOverride('_method')); // for put and delete requests



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


//index .route
app.get('/chats', async(req, res) => {
   let chats = await Chat.find();
   console.log(chats);
   res.render('index.ejs', {chats});
  });


//new`route
app.get('/chats/new', (req, res) => {
    res.render('new.ejs');
  });  

  //create route
 app.post('/chats', async (req, res) => {
    let{ from, to, message } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        createdAt: new Date()
    });
    //save new chat
   newChat.save()
    .then(() => {
        console.log('New chat created:', newChat);
    })
    .catch((err) => {
        console.error('Error creating chat:', err);
    });
   res.redirect('/chats');
  }); 

//edit route
app.get('/chats/:id/edit', async(req, res) => {
    let { id } = req.params;
    let chat = Chat.findById(id);
    res.render('edit.ejs', {chat});
  });

//update route
app.put('/chats/:id', async(req, res) => {
    let { id } = req.params;
   let {message: newMsg} = req.body;
   let  updatechat= await Chat.findByIdAndUpdate(
    id, {message: newMsg},
        {new: true, runValidators: true}
    );
    console.log(updatechat);
   res.redirect('/chats'); 
  });

  //delete route
app.delete('/chats/:id', async(req, res) => {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
  });
  
app.get('/', (req, res) => {
  res.send('root is working!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
  





