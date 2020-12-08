module.exports = [
  [/^\/api\/(.*)/i, '/:1'],
  [/^\/$/i, '/'],
  [/^\/admin\/?$/i, '/index/admin'],
  [/^\/abc\/?$/i, '/index/abc'],
  [/\//, 'index/_404', 'get']
];
