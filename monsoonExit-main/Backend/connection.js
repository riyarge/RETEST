const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect('mongodb+srv://userone:userone@cluster0.xwicj4t.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0'
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
