import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


// Get the current DATE
const dateObject = new Date(); //Todays date
let strMonth;
let strDay;
// Get the day of the month
const day = dateObject.getDate();
// Get the month in string
//0-Sunday 1-Monday ...
switch (dateObject.getMonth()) {
  case(0):
    strMonth = "January";
    break;
  case(1):
    strMonth = "February";
    break;
  case(2):
    strMonth = "March";
    break;
  case(3):
    strMonth = "April";
    break;
  case(4):
    strMonth = "May";
    break;
  case(5):
    strMonth = "June";
    break;
  case(6):
    strMonth = "July";
    break;
  case(7):
    strMonth = "August";
    break;
  case(8):
    strMonth = "September";
    break;
  case(9):
    strMonth = "October";
    break;
  case(10):
    strMonth = "November";
    break;
  case(11):
    strMonth = "December";
    break;
}
// Get the day in string
// 0-January ...
switch(dateObject.getDay()) {
  case(0): 
    strDay = "Sunday";
    break;
  case(1):
    strDay = "Monday";
    break;
  case(2): 
    strDay = "Tuesday";
    break;
  case(3):
    strDay = "Wednesday";
    break;
  case(4): 
    strDay = "Thursday";
    break;
  case(5):
    strDay = "Friday";
    break;
  case(6):
    strDay = "Saturday";
    break;
}


// Get the right color
const colorArray = ["yellowPI", "greenPI", "bluePI"];
let randomColor;


//** middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// DATA TO PASS TO EJS
let formAction = "";
const dateData = {
  strMonth: strMonth, 
  strDay: strDay, 
  day: day
};
let taskData = {};
let taskItems = [];
let taskItemsWork = [];


//** GET
app.get("/", (req, res) => {
  formAction = "/";
  res.render("index.ejs", { formAction:formAction, dateData: dateData, taskItems: taskItems, mainPage: true });
}); 

app.get("/work", (req, res) => {
  formAction = "/work";
  res.render("index.ejs", { formAction:formAction, dateData: dateData, taskItemsWork: taskItemsWork, workPage: true });
}); 


//** POST - New Task
app.post("/", (req,res) => {
  randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  taskData = {
    newTask: req.body["task-description"],
    postItColor: randomColor
  };

  taskItems.push(taskData);
  res.redirect("/");
});

app.post("/work", (req,res) => {
  randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  taskData = {
    newTask: req.body["task-description"],
    postItColor: randomColor
  };

  taskItemsWork.push(taskData);
  res.redirect("/work");
});


//** SERVER UP
app.listen(port, (req, res) => {
  console.log(`The server is running on port ${port}`);
});
