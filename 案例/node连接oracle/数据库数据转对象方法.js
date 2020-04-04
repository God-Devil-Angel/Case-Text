function changeover(result) {
    var arr = []

    // console.log(result.metaData[0].name, result.metaData[1].name)
    // console.log(result.rows.length)
    // console.log(result)

    for (var i = 0; i < result.rows.length; i++) {
        var resu = {}
        for (var j = 0; j < result.metaData.length; j++) {
            const name = result.metaData[j].name
            resu[name] = result.rows[i][j]

        }


        arr.push(resu)


    }
    return arr
}
module.exports = changeover