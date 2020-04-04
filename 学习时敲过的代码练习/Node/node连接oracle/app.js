const express = require('express');
const changeover = require('./数据库数据转对象方法')
const app = express();
const dataConnect = require('./封装数据库连接函数')
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
const bodyParse = require('body-parser')
app.use(bodyParse.urlencoded({ extended: false }))
    // const dataConnect = new Promise((reslove, reject) => {
    //     oracledb.getConnection(
    //         config,
    //         async function(err, connection) {
    //             if (err) {
    //                 console.error(err.message);
    //                 return;
    //             }
    //             connection.commit();
    //             const resultt = await connection.execute("select * from data")
    //             reslove(resultt)


//         });
// });


// dataConnect.then(result => console.log(result))

app.get('/db', (req, res) => {
    dataConnect('select * from data').then(result => {
        res.send(changeover(result))
            // console.log(result)

    })

})

app.post('/add', (req, res) => {
    console.log("insert into data values(" + parseInt(req.body.Id) + ",'" + req.body.Name + "')")
    dataConnect("insert into data values(" + parseInt(req.body.Id) + ",'" + req.body.Name + "')").then(result => {
        res.send(result)
            // console.log(result)

    })
})
app.delete('/del', (req, res) => {
    dataConnect("delete from data").then(result => {
        res.send(result)
    })
})
app.delete('/del_one', (req, res) => {

    dataConnect('delete from data where id=' + req.query.id).then(reult => res.send(reult))
})


app.listen(80, function() {
    console.log('启动成功')
})