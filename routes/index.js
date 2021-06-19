const express = require('express');
const router = express.Router();
const db = require('../public/javascript/dataBase');

router.get('/', function(req, res, next) {
   // Get from another editText or pass from another page
   let code = "C30";
   let age = 'child';

   db.GetStandardAndOrderClause(code, age, (mas)=>{
      let cr = mas[0].orderClause;
      db.GetCriteria(cr, (mas2)=>{
         res.render('index.hbs', {title: 'Health', criteria:mas2});
      });
   }, ()=>{
      res.send("Error");
   });
});

router.get("/:lnk", function (req, res, next) {
   // Get from another editText or pass from another page
   let code = "C30";
   let age = 'child';

   db.GetStandardAndOrderClause(code, age, (mas)=>{
      let cr = mas[0].orderClause;
      db.GetCriteria(cr, (mas2)=>{
         let aa = mas2[0].criteria;
         res.render('index.hbs', {title: 'Health', criteria:mas2});
      });
   }, ()=>{
      res.send("Error");
   });
});

module.exports = router;
