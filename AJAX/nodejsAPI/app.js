
// --- Polyfill for Node.js <16.9 ---
if (!Object.hasOwn) {
  Object.hasOwn = function (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };
}
// 

// Sample data
let emps = [
  { id: 1001, name: "Ranajit",dept: "HR",DOJ: "2004-04-01T08:34:46.000Z",sal: 100000 },
  { id: 1002, name: "Raja",dept: "Test",DOJ: "17/09/2020",sal: 150000 },
  { id: 1003, name: "Pradeep",dept: "Accounts",DOJ: "10/12/2016" ,sal: 200000}
];
var express = require("express");
var cors = require("cors");
var app = express()
app.use(cors())
// ROUTES
var router = express.Router()
// 👉 READ all employees
router.get("/employees", (req, res) => {
  res.status(200).json(emps);
});

// 👉 READ one employee by ID
router.get("/employees/:id", (req, res) => {
  console.log(req);
  
  const empId = parseInt(req.params.id);
  const emp = emps.find(e => e.id === empId);
  if (!emp) return res.status(404).json({ message: "Employee not found" });
  res.status(200).json(emp);
});

// 👉 CREATE new employee
router.post("/employees", (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ message: "id and name are required" });
  }
  if (emps.find(e => e.id === id)) {
    return res.status(409).json({ message: "Employee with this id already exists" });
  }
  const newEmp = { id, name };
  emps.push(newEmp);
  res.status(201).json(newEmp);
});

// 👉 UPDATE employee by ID
router.put("/employees/:id", (req, res) => {
  const empId = parseInt(req.params.id);
  const { name } = req.body;
  const emp = emps.find(e => e.id === empId);
  if (!emp) return res.status(404).json({ message: "Employee not found" });

  emp.name = name || emp.name;
  res.status(200).json(emp);
});

// 👉 DELETE employee by ID
router.delete("/employees/:id", (req, res) => {
  const empId = parseInt(req.params.id);
  const index = emps.findIndex(e => e.id === empId);
  if (index === -1) return res.status(404).json({ message: "Employee not found" });

  const deleted = emps.splice(index, 1);
  res.status(200).json({ message: "Employee deleted", deleted });
});








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