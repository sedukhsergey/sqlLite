const db = require('./db');

class Users {
  static all(cb) {
    db.all('SELECT * FROM users', cb);
  }
  static create(data, cb) {
    const sql = 'INSERT INTO users(name, city) VALUES (?, ?)';
    db.run(sql, data.name, data.city, cb);
  }
}

module.exports = Users;
