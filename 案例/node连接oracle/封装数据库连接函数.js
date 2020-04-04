const oracledb = require('oracledb');
var config = {
    user: 'node',
    password: '123456',
    connectString: "localhost:1521/orcl"
};
const dataConnect = function(mess) {
    return oracledb.getConnection(config).then(async(connection) => {

        const resultt = await connection.execute(mess)
        connection.commit();
        return resultt

    }).catch(err => {
        if (err) {
            console.error(err.message);
            return;
        }
    });


}
module.exports = dataConnect