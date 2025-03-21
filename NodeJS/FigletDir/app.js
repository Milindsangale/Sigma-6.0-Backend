var figlet = require("figlet");

figlet("Milind Raosaheb Sangale", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});