const expess = require('express');
const app= expess();

//midleware

/* app.use((req,res,next)=>{
    console.log("Middleware is running")
 
    next();
    console.log("this is after next()")
    
});
app.use((req,res,next)=>{
    console.log("Middleware is running 2")
    next();

}); */
//logging middleware
/* app.use((req,res,next)=>{
    req.time = new Date().toString();
    console.log("Middleware is running",req.method ,req.path, req.time);
    next();
}); */

app.use("/api",(req,res,next)=>{
   let {token} = req.query;
   if(token == "givemeacookie"){
       next();
    }
    else{
         res.status(401).send("Unauthorized")
    }
});


app.get('/api',(req,res)=>{
    res.send("Middleware is running")
}   );


app.get('/',(req,res)=>{
    res.send("Hello World")
});

app.get('/about',(req,res)=>{
    res.send("About Page")
});

//page for not found
app.use((req,res,next)=>{
    res.status(404).send("Page not found")
}); 

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});
