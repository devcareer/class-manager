import config from 'dotenv';
import express from 'express';
config.config();

const app = express();

// when a random route is inputed
// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to this API.',
//   }));

app.get('/', (req, res)=>{
    res.send({
            message: 'Welcome to this API.',
          })
})

const port = process.env.PORT || 8000;
app.listen(process.env.port || port, ()=>{
    console.log(`Server started at port ${port}`);
})



export default app;
