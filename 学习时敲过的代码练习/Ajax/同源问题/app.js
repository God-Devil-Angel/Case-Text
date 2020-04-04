const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


app.get('/ty', (req, res) => {
    const result = "fn()3000";
    res.send(result);
})




app.listen(3000);
console.log('3000启动');