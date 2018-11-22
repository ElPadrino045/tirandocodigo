/*
[remote "origin"]
url = https://github.com/ElPadrino045/prueba*/
//fetch = +refs/heads/*:refs/remotes/origin/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'classicmodels'
});

connection.connect();

connection.query('select * from customers', function (error, results, fields) {
  if (error) throw error;
  //console.log(results[0]);
/*  for (var i = 0; i < results.length; i++) {
    console.log('Tabla número :'+ (i+1)+ "  ",results[i].Tables_in_classicmodels+"\n");
  }*/
  for (var i = 0; i < results.length; i++) {
     //console.log('Registro número :'+ (i+1)+ "  ",results[i]+"\n");
     console.log('Nombre :'+ (i+1)+ "  ",results[i].customerName);
   }
});

connection.end();
