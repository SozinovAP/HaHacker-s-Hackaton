const express = require('express');
const router = express.Router();
const db = require('../public/javascript/dataBase');

router.get('/', function(req, res, next) {
   // Get from another editText or pass from another page
   let code = "C30";
   let age = 'child';

   db.GetStandardAndOrderClause(code, age, (mas)=>{
      res.render('index.hbs', {title: 'Health', criteria:mas});
   }, ()=>{
      res.send("Error");
   });});

router.get("/:lnk", function (req, res, next) {
   // Get from another editText or pass from another page
   let code = "C30";
   let age = 'child';

   db.GetStandardAndOrderClause(code, age, (mas)=>{
      res.render('index.hbs', {title: 'Health', criteria:mas})
   }, ()=>{
      res.send("Error");
   });
});

module.exports = router;
