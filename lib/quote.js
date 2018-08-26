module.exports = function(data) {
  return function(request, response) {
    response.send(data[0]);
  }
}