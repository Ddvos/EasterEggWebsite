const express = require('express')
const app = express()
//const http = require('http');
const port = 5000

// Handle production
///if(process.env.NODE_ENV === 'production'){

    //static folder
    app.use(express.static(__dirname + '/build'));
    //socketApp.use(express.static(__dirname + '/public'))  //socket.io

    //handle SPA
    app.get(/.*/, (req,res) =>res.sendFile(__dirname + '/build/index.html'));
    //socketApp.get(/.*/, (req,res) =>res.sendFile(__dirname + '/public/index.html')); //socket.io

//}

app.listen(port, () => {
  console.log(`Easter egg web-app listening at http://localhost:${port}`)
})