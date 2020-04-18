const db = require('./db');

class Tracks {
  static all(cb) {
    db.all('SELECT * FROM tracks', cb);
  }
  static find(id, cb) {
    db.get('SELECT * FROM tracks WHERE id = ?', id, cb);
  }
  static create({ albumId, composer, milliseconds }, cb) {
    if ( !albumId || !composer || !milliseconds) {
      return cb(new Error('Please provide all params'))
    }
    const sql = 'INSERT INTO tracks(albumId, composer, milliseconds)'
  }
}

module.exports = Tracks;
