module.exports = function(data) {
  return function(request, response) {
    let size = data.length - 1;
    let index = Math.floor(Math.random() * size);
    let respData = data[index];
    response.send(respData);
  }
}