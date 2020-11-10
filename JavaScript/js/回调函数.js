function callbackTestDemo(name = 'JavaScript', callback) {
  console.log('name is ', name);
  console.log('callback -- ', callback);
  callback && callback(name);
  console.log('callbackTestDemo 的最后执行语句');
}

callbackTestDemo('You Tianle', (name) => {
  console.log('我是一个回调函数，在执行完 callbackTestDemo 之后就到我啦。');
  console.log('感觉自己也是非常厉害的');
  console.log('从 callbackTestDemo 传进来的参数 - ', name);
});