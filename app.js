const express = require("express");
const bodyParser = require("body-Parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();
    dayList =["saturday", "sunday", "Monday","Tuesday", "Wensday", "Thursday","Friday"];
    day = "";
    if (currentDay === 6 || currentDay === 0){
        day=dayList[currentDay]
        
    }else {
        day ="weekend !" ;
    }
    res.render("list", {kindOfDay: day})
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})