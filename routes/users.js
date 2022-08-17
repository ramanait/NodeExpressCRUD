const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send({msg:'respond with a resource'});
});

/* GET users listing. */
router.get('/withFailedResponse', (req, res, next) => {
  res.send(400,{msg:'respond with a failed res'});
});

/* GET users listing. */
router.get('/withSuccessResponse', (req, res, next) => {
  res.send({msg:'respond with a res'});
});

module.exports = router;
