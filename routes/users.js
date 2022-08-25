const express = require('express');
const router = express.Router();
const user = require("../controllers/UserController.js");

/* Login API => token */
router.post('/auth/login', (req, res, next) => {
  user.login(req, res);
});

/* GET users listing. read */
router.get('/', (req, res, next) => {
  user.listJson(req, res);
});

/* GET users listing. read*/
router.get('/:id', (req, res, next) => {
  user.byId(req, res);
});

/* Create user*/
router.post('/', (req, res, next) => {
  user.save(req, res);
});

/* update user in the database*/
router.put('/:id', (req, res, next) => {
  user.update(req, res);
});

/* delete user from the database*/
router.delete('/:id', (req, res, next) => {
  user.delete(req, res);
});

/*  user and mentor details from the database*/
router.get('/mentor/:id', (req, res, next) => {
  user.userMentor(req, res);
});

module.exports = router;
