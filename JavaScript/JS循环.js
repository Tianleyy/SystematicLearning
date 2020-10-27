/**
 * 参考文章：细说 JS 循环方法
 * https://juejin.im/post/6844903880145240072
 * /

/**
 * 常见遍历方法
 * 1、for...in
 * 2、for...of
 * 3、entries
 * 4、Object.keys
 * 5、Object.getOwnProperty
 * 
 * 数组遍历方法
 * 1、map
 * 2、forEach
 * 3、reduce
 * 4、every
 * 5、some
 * 6、fiter
*/

/**
 * TODO: for...in
 * 
 * 遍历数组索引、对象的属性
 * 用于遍历 可枚举属性，包括自有属性、继承自原型的属性
 * 
 * 一般 for...in 用来遍历对象属性
 * 可以遍历所有的可枚举属性，包括继承自原型链的属性
 */
// var obj = {
//   "name": "sme",
//   "sex": "female",
// };

// // 增加不可枚举的属性 age
// Object.defineProperty(obj, 'age', { value: '18', enumerable: false });

// // 通过原型链增加一个函数
// Object.prototype.protoPer1 = function() {
//   console.log('name is sme');
// };

// for (let a in obj) {
//   console.log(a);
// }

/**
 * TODO: for...of
 * 
 * 允许遍历 Array(数组), String(字符串), Maps(映射), Sets(集合), Arguments Object(参数对象) 等可迭代的数据结构
 * 返回的是属性值，不允许遍历对象
 * 
 * 适用于遍历数组/数组对象/字符串/map/set等拥有迭代器对象的集合，但不能遍历对象，因为没有迭代器对象
 * 可以正确响应 break / continue / return 语句
 * 如果想要迭代一个对象的属性，可以用 for...in 或内建的 Object.keys() 方法
 */
// // 数组
// const testData = [1, 2, 3, 4, 5, 6];
// const testData = [
//   { name: 'hello' },
//   { name: 'hi' },
//   { name: 'js' },
// ];

// // 字符串
// const testData = 'hello'

// for (const value of testData) {
//   console.log(value);
// }

/**
 * TODO: forEach
 * 
 * 遍历数组，调用数组的每个元素，并将元素传递给回调函数
 * 不能使用 break / continue / return 语句
 * 可改变原有数组 ???
 */
// let arr = [1, 2, 3, 4, 5];
let arr = [
  { name: 'hello' },
  { name: 'hi' },
  { name: 'js' },
];

arr.forEach((value, index, arr) => {
  console.log('索引 -- ', index);
  console.log('值 -- ', value.name + 123);
  console.log('arr -- ', arr[index].name + 'change');
});

/**
 * TODO: Object.getOwnProperty
 */
