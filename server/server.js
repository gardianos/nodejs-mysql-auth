const express = require('express')
const apiRouter = require('./routes/index')

//Initialize express
const app = express()

app.use(express.json());

//Routes
app.use('/api/users', apiRouter)

app.listen(process.env.PORT || '5000', () => {
    console.log(`Server started on port: ${process.env.PORT || '5000'}`);
});