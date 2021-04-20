const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
app.use(express.static('docs'));

// router.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/docs/index.html'));
// });

// router.get('/bmi',function(req,res){
//   res.sendFile(path.join(__dirname+'/docs/bmi.html'));
// });

// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });

// router.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

//add the router
// app.use('/', router);
app.listen(process.env.port || 3000);
