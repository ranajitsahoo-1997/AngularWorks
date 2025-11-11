var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

var router = express.Router();
// 👉 READ all employees
router.get("/api/", (req, res) => {
  res.status(200).json({
    result: "Hii This is Raja here",
  });
});
router.get("/api/add/:a/:b", (req, res) => {
  var a = req.params.a;
  var b = req.params.b;
  var c = parseInt(a) + parseInt(b);

   setTimeout(() => {
    res.status(200).json({
      result: c,
    });
  }, 2000);
});
router.get("/api/mul/:a/:b", (req, res) => {
  var a = req.params.a;
  var b = req.params.b;
  var c = parseInt(a) * parseInt(b);

   setTimeout(() => {
    res.status(200).json({
      result: c,
    });
  }, 2000);
});
router.get("/api/sub/:a/:b", (req, res) => {
  var a = parseInt(req.params.a);
  var b = parseInt(req.params.b);
  var c = 0;
  if (a > b) {
    c = a - b;
  } else {
    c = b - a;
  }

   setTimeout(() => {
    res.status(200).json({
      result: c,
    });
  }, 2000);
});
app.use("/", router);

app.listen(8000, function () {
  console.log("app is listening on 8000...");
});
