const express = require('express');
const router = express.Router();
const db = require('../public/javascript/dataBase');

function FileRead(path)
{
   let listCriteria = [];
   let dir = __dirname;
   let res = dir.substring(0, dir.lastIndexOf("\\") + 1);
   res += "public\\source\\criteria\\" + path;
   const fs = require('fs');
   fs.readFile(res, (err, data) => {
      if (err) throw err;
      console.log(data);
      listCriteria.push(data);
   });
   return listCriteria;
}

router.get('/', function(req, res, next) {
   // Get from another editText or pass from another page
   let code = "C30";
   let age = 'child';

   db.GetStandardAndOrderClause(code, age, (mas)=>{
      let cr = mas[0].orderClause;
      db.GetCriteria(cr, (mas2)=>{
         let path = mas2[0].criteria;
         FileRead(path);
         res.render('reAppeal.hbs', {title: 'Health', criteria:mas2});
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
         let path = mas2[0].criteria;
         FileRead(path);
         res.render('reAppeal.hbs', {title: 'Health', criteria:mas2});
      });
   }, ()=>{
      res.send("Error");
   });
});

module.exports = router;
