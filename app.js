const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//telling our app to use ejs.
app.set('view engine', 'ejs');


app.get("/", function(req, res){
    //defining that the var today is a new "Date"
    var today = new Date();
    var day = "",
    currentday = new Date().getDay();
    switch (currentday) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
  //ejs searches for a folder named "views" by default, and in the views file we have a file named index.js , so we let ejs know the name of our ejs file which is "index" and in that file we have a variable "kindOfDay" with the value "day" , and the value "day" includes any day of the week. Each day of the week has its own "number" (look at the switch statement.)
        res.render('index', {kindOfDay: day});
});


//Since we are running this locally, we are using express. The page / server will be opened on the port 3000.  (localhost:3000)
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
