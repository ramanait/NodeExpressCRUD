const express = require('express');
const router = express.Router();
const employee = require("../controllers/EmployeeController.js");

// Get all employees in the UI
router.get('/', (req, res) => {
  employee.list(req, res);
});

// Get all employees in the UI
router.get('/json', (req, res) => {
  employee.listJson(req, res);
});


// Get single employee by id
router.get('/byId/:id', (req, res) => {
  employee.byId(req, res);
});

// Get single employee by id
router.get('/show/:id', (req, res) => {
  employee.show(req, res);
});

// Create employee
router.get('/create', (req, res) => {
  employee.create(req, res);
});

// Save employee
router.post('/save', (req, res) => {
  employee.save(req, res);
});

// Edit employee
router.get('/edit/:id', (req, res) => {
  employee.edit(req, res);
});

// Edit update
router.post('/update/:id', (req, res) => {
  employee.update(req, res);
});

// Edit update
router.post('/delete/:id', (req, res, next) => {
  employee.delete(req, res);
});

module.exports = router;
