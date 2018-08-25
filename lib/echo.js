module.exports = function (reqv, resp) {
  let sprintTime = {};
  let date = new Date();
  sprintTime.sprint = date.toDateString(); 
  resp.send(sprintTime);
}