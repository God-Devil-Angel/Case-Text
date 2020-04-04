const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


app.get('/ty', (req, res) => {
    const par = req.query.callback;
    const result = par + '(10)';
    setTimeout(function() {
        res.send(result);
    }, 1000)

    console.log(result);
})




app.listen(3001);
console.log('3001启动');