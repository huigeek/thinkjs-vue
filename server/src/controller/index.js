const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display('index.html');
  }
  adminAction() {
    return this.display('admin.html');
  }
  abcAction() {
    return this.display('abc.html');
  }
  _404Action() {
    return this.display('404.html');
  }
};
