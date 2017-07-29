const fuzzy = require('fuzzy')

module.exports = function () {
  var list = ['baconing', 'narwhal', 'a mighty bear canoe'];
  var results = fuzzy.filter('bcn', list)
  var matches = results.map(function(el) { return el.string; });
}
