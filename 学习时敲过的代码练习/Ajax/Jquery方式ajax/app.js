const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/base', (req, res) => {
    res.send({
        name: '张武',
        age: 33
    })
})
app.get('/jsonp', (req, res) => {
    const cd = req.query.cd;
    const pram = cd + '({name: "zhangsan"})';
    res.send(pram);
    console.log(pram);
})

app.listen(3000);
console.log('3000');