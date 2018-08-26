module.exports = function(data) {
  return function(request, response) {
    response.send({
      languages: data.languages,
      frameworks: data.frameworks,
    });
  }
}