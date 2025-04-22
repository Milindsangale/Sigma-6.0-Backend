const expess = require('express');
const app= expess();

//midleware

app.use((req,res,next)=>{
    console.log("Middleware is running")
    /* res.send("Middleware is running") */
    next();
    console.log("this is after next()")
    // this will not run if next() is called
});
app.use((req,res,next)=>{
    console.log("Middleware is running 2")
    next();

});

app.get('/',(req,res)=>{
    res.send("Hello World")
});

app.get('/about',(req,res)=>{
    res.send("About Page")
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});
