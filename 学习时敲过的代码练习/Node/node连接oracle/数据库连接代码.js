var oracledb = require('oracledb');
var config = {
    user: 'scott',
    password: 'scott',
    connectString: "localhost:1521/orcl"
};
oracledb.getConnection(
    config,
    function(err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }
        connection.execute("SELECT * from emp",
            function(err, result) {
                if (err) {
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                //打印返回的表结构
                console.log(result.metaData);
                //打印返回的行数据
                console.log(result.rows);
            });
    });

function doRelease(connection) {
    connection.close(
        function(err) {
            if (err) {
                console.error(err.message);
            }
        });
}