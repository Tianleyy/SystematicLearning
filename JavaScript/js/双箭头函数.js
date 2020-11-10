/**
 * ES6 的双箭头函数
 * 
 * https://www.cnblogs.com/cn-andy/p/9493307.html
 */

const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit));
  return common.fetch({ url: config.argumentSubmit, method: 'POST' })
    .then(response => response.message)
    .then(message => dispatch(requestPosts(subreddit, message)))
}

// 双箭头函数 解析后的函数
// 双箭头的意思是导出一个函数
const fetchPosts = function (subreddit) {
  return function (dispatch) {
    return common.fetch({ url: config.argumentSubmit, method: 'POST' })
      .then(response => response.message)
      .then(message => dispatch(receivePosts(subreddit, message)));
  }
}