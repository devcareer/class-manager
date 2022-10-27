const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Welcome</h1>')
})

const port = 8000;
app.listen(process.env.port || port, ()=>{
    console.log(`Server started at port ${port}`);
})