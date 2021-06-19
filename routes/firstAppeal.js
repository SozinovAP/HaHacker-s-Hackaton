const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
   res.render('firstAppeal', { title: 'Page' });
});

module.exports = router;