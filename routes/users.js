const express = require('express');
const router = express.Router();

/* GET users listing. read */
router.get('/', (req, res, next) => {
  res.send({ msg: 'respond with a resource', status: "success" });
});

/* GET users listing. read*/
router.get('/withFailedResponse', (req, res, next) => {
  res.send(400, { msg: 'respond with a failed res' });
});

/* GET users listing. read*/
router.get('/withSuccessResponse', (req, res, next) => {
  res.send({ msg: 'respond with a success res' });
});

/* GET users listing. read*/
router.post('/withSuccess', (req, res, next) => {
  try {
    throw ""
    res.send({ msg: 'respond with a res' });
  } catch (error) {
    res.send(400, { msg: "got an error", err: error });
  }

});

module.exports = router;
