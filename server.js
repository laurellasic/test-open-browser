const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use('/', function(req,res){
    setTimeout(() => {
      open('https://google.com');  
    }, 5000);    
    // res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });
const server = http.createServer(app);
const port = process.env.PORT || 3001
server.listen(port);
console.debug('Server listening on port ' + port);
const open = require('open');

// opens the url in the default browser 
