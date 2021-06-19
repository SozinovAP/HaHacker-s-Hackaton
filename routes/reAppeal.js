const express = require('express');
const router = express.Router();
const db = require('../public/javascript/dataBase');

function FileRead(path, callback)
{
   let listCriteria = [];
   let dir = __dirname;
   let res = dir.substring(0, dir.lastIndexOf("\\") + 1);
   res += "public\\source\\criteria\\" + path;
   const fs = require('fs');
   fs.readFile(res, (err, data) => {
      if (err) throw err;
      console.log(data);
      let string = data.toString();
      listCriteria = string.split('\n');
      callback(listCriteria)
   });
}

router.get('/', function(req, res, next) {
   let array = [];
   res.render('reAppeal.hbs', {title: 'Health', criteria:array});
   /*let code = "C30";
   let age = 'child';

   db.GetStandardAndOrderClause(code, age, (mas)=>{
      let cr = mas[0].orderClause;
      db.GetCriteria(cr, (mas2)=>{
         let path = mas2[0].criteria;
         FileRead(path, (array)=>{
            res.render('reAppeal.hbs', {title: 'Health', criteria:array});
         });
      });
   }, ()=>{
      res.send("Error");
   });*/
});

module.exports = router;
