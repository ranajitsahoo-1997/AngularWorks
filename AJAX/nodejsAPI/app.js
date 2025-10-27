
// --- Polyfill for Node.js <16.9 ---
if (!Object.hasOwn) {
  Object.hasOwn = function (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };
}
// 

var express = require("express");
var cors = require("cors");

var app = express()
app.use(cors())

var router = express.Router()

router.get("/sum", function(req,res){
    var a = req.query.a;
    var b = req.query.b;
    var c = parseInt(a)+parseInt(b);
    res.status(200).json(c)
})

app.use("/",router)

app.listen(3001,function(){
    console.log("app is listening on 3001...")
})