let express = require('express');

let router = express.Router();

router.get('/', function (req, res, next) {
  // router will be call to this function, and then use respond to display this message as a Json file
  res.json({ message: 'Hello! ITEC 2560 Web Programmers' });
});

// Other files can publicly access this file using this export module
module.exports = router;
