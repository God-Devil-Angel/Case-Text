const mongoose = require('mongoose');
//创建集合规则喝集合对象
const user = new mongoose.Schema({
    email: String

})
const User = mongoose.model('User', user);

//创建集合规则喝集合对象
const user1 = new mongoose.Schema({

    message: []

})
const User1 = mongoose.model('User1', user1);

module.exports.User1 = User1;
module.exports.User = User;