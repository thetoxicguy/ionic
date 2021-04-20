// const express = require('express')
// const app = express()
// const path = require('path');

// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "docs"))

// app.get('/', (req,res)=>{
//     res.sendFile('index.html')
//     }
// )

// app.get('/about', (req,res)=>{
//     res.send("Thanks for learning all about us")
// })

// app.listen(3000)

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/docs/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/bmi',function(req,res){
  res.sendFile(path.join(__dirname+'/docs/bmi.html'));
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
