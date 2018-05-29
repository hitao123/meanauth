const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/databases');
const Schema = mongoose.Schema;

// User schema
// https://cnodejs.org/topic/504b4924e2b84515770103dd
// http://mongoosejs.com/docs/guide.html
const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// User model
// mongo 会默认创建复数形式 collection 存在数据库
const User = mongoose.model('User', UserSchema);
/**
 * 
 * @param {UserSchema} newUser 
 * @param {function} callback 
 */
function addUser(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err
      newUser.password = hash;
      // 保存数据库, 回调是为了响应 json 数据给客户端 告知成功或者失败
      newUser.save(callback);   
    });
  });
}
/**
 * 
 * @param {*} password 
 * @param {*} hash 
 * @param {*} callback 
 */
function comparePassword(password, hash, callback) {
  bcrypt.compare(password, hash, (err, res) => {
    if (err) throw err
    callback(null, res);
  });
}
/**
 * 
 * @param {*} id 
 * @param {*} callback 
 */
function getUserById(id, callback) {
  User.findById(id, callback)
}
/**
 * 
 * @param {*} username 
 * @param {*} callback 
 */
function getUserByUsername(username, callback) {
  const query = {username: username};
  User.findOne(query, callback);
}


module.exports = {
  User,
  comparePassword,
  addUser,
  getUserById,
  getUserByUsername
}
