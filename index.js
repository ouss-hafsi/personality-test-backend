const express = require('express');
const cors = require('cors');
const app = express();

require('./db/connection');
app.set('port', process.env.PORT || 4000);

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.redirect('/admin')
})

// Routes
const resultController = require('./controllers/resultController');
app.use('/results', resultController);

const userController = require('./controllers/userController');
app.use('/users', userController);




app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).send(message);
});

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}`);
})