const router = require('express').Router();

/**
 * @route   GET /api
 * @desc    Testing GET requests for api route
 * @access  Public
 */
router.get('/', (req, res) => {
  res.send('Hitting api GET endpoint!');
});

/**
 * @route   GET /api
 * @desc    Testing GET requests for api route
 * @access  Public
 */
router.post('/', (req, res) => {
  res.send('Hitting api POST endpoint');
});

module.exports = router;
