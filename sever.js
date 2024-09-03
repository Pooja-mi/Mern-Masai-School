// const http = require('http');

// const server = http.createServer((req , res)=>{
//     console.log(req.url);
//     res.end("hello");
// });

// server.listen(3000,  ()=>{
//     console.log('Server running on port 3000');
// });
 
const express = require('express');
const app = express();
app.get('/', (req , res)=>{
    res.send('Hello from Node.Js');
});
app.get('/contact', (req , res)=>{
    res.send('The Contact Page');
});
app.get('/about', (req , res)=>{
    res.send('The About Page');
});

const port= 3000;

app.listen(PORT , ()=>{
    console.log('server running on port $(PORT)')
})