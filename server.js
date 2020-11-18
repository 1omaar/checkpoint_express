console.log("checkpoint express")
// require express
const express=require("express");
// init express
const app=express();
app.use(express.json());
// serve the state file




  const dis= app.use(express.static('public'));
let date = new Date();
let day= date.getDay()
let time=date.getHours()
console.log(day)
console.log(time)


function Errorhandler(err, req, res, next) {
    if ((day===7 )&& (time!==9||time!==10||time!==11||time!==12||time!==13||time!==14||time!==15||time!==16||time!==17)){
        console.log("hello");
    }else {
       next();   
}
}
app.get("/" ,Errorhandler,dis)

// run server
const port=5000;
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running in port ${port}`)
})
// Parse data
