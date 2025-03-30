var figlet = require("figlet");

figlet("Milind Raosaheb Sangale", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


/* 

let h1 = document.querySelector("h11");
let h2 = document.querySelector("h22");
let pasra =document.querySelectorAll(0);
let h1 =document.querySelector("h1"); */