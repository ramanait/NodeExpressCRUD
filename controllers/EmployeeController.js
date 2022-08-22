const mongoose = require("mongoose");
const Employee = require("../models/Employee");

const employeeController = {};


// Show list of employees as JSON
employeeController.listJson = (req, res) => {
  Employee.find({}).exec((err, employees) => {
    if (err) {
      console.log("Error:", err);
      res.send(400, { msg: err });
    }
    else {
      res.send(200, { employees: employees });
    }
  });
};


// Show employee by id
employeeController.show = (req, res) => {
  Employee.findOne({ _id: req.params.id }).exec((err, employee) => {
    if (err) {
      console.log("Error:", err);
      res.send(400, { msg: err });
    }
    else {
      res.render("../views/employees/show", { employee: employee });
    }
  });
};

// Show employee by id
employeeController.byId = (req, res) => {
  Employee.findOne({ _id: req.params.id }).exec((err, employee) => {
    if (err) {
      console.log("Error:", err);
      res.send(400, { msg: err });
    }
    else {
      res.send(200, { employee: employee });
    }
  });
};

// Create new employee
employeeController.create = (req, res) => {
  res.render("../views/employees/create");
};

// Save new employee
employeeController.save = (req, res) => {
  const employee = new Employee(req.body);

  employee.save((err) => {
    if (err) {
      console.log(err);
      res.send(400, { err: err });
    } else {
      console.log("Successfully created an employee.");
      res.send({ id: employee._id });
    }
  });
};


// Update an employee
employeeController.update = (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary } }, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.render(400, { employee: req.body });
    }
    res.send({ id: employee._id });
  });
};

// Delete an employee
employeeController.delete = (req, res) => {
  Employee.remove({ _id: req.params.id }, (err) => {
    if (err) {
      console.log(err);
      res.send(400, {msg:"Employee deleted"})
    }
    else {
      console.log("Employee deleted!");
      res.send({"msg":"Employee deleted successfully"});
    }
  });
};

module.exports = employeeController;
