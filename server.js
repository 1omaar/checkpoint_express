console.log("checkpoint express")
// require express
const express=require("express");
// init express
const app=express();
let date = new Date();
function requesteDay(req,res,next){
    req.requesteDay=date.getDay();
    if(req.requesteDay>=1&&req.requesteDay<=6){
        next();
    }else{res.status(500).send('<h1 style="text-align:center;">Out Service</h1>')}
};
  function requestTime(req,res,next){
 req.requestTime=date.getHours();
 if(req.requestTime >=9&&req.requestTime<=17){
    next();
 }else{res.status(500).send('<h1 style="text-align:center;">Out Service</h1>')}
};

app.use(express.json());
// serve the state file

app.use(requesteDay,requestTime,express.static('public'));








// run server
const port=5000;
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running in port ${port}`)
})
// Parse data
