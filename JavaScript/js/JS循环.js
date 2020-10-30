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
// let arr = [
//   { name: 'hello' },
//   { name: 'hi' },
//   { name: 'js' },
// ];

// arr.forEach((value, index, arr) => {
//   console.log('索引 -- ', index);
//   console.log('值 -- ', value.name + 123);
//   console.log('arr -- ', arr[index].name + 'change');
// });
// console.log(arr);

/**
 * TODO: Object.getOwnPropertyNames
 * 
 * 主要用于返回对象的自有属性
 * 包括可枚举、不可枚举的属性
 * 不包括继承自原型的属性
//  */
// let obj = {
//   "name":"sme",
//   "sex":"female",
//   'hello': function() {
//     console.log('hello');
//   },
// };

// // 给 obj 添加不可枚举属性 age
// Object.defineProperty(obj, 'age', {
//   value: 18,
//   enumerable: false,
// });

// // 通过原型链增加方法属性
// Object.prototype.protoper1 = function() {
//   console.log('name is JavaScript.');
// };

// console.log(Object.getOwnPropertyNames(obj));
// obj['hello']();

/**
 * TODO:
 * 
 * Object.keys()：返回一个数组，元素均为对象自有可枚举的属性
 * Object.values()：返回一个数组，元素均为属性对应的额值
 * Object.entries()：返回二元数组，键值对
 */
// let obj = {
//   "name":"sme",
//   "sex":"female",
//   'hello': function() {
//     console.log('hello');
//   },
// };

// // 给 obj 添加不可枚举属性 age
// Object.defineProperty(obj, 'age', {
//   value: 18,
//   enumerable: false,
// });

// // 通过原型链增加方法属性
// Object.prototype.protoper1 = function() {
//   console.log('name is JavaScript.');
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

/**
 * TODO:
 * 
 * array.map()：遍历数组，不改变原数组，可以使用 return 返回结果，break, continue 不生效
 * array.filter()：遍历过滤数组
 * array.every()：遍历数组是否全部满足，返回 true
 * array.some()：遍历数组一个满足即为 true
 * array.reduce()：接收一个函数作为累加器，数组中的每个值(从左到右)开始缩减，最终计算为一个值
 */
let obj = [
  {
    "name":"one",
    "sex":"female",
    type: 1,
  },
  {
    "name":"two",
    "sex":"male",
    type: 1,
  },
  {
    "name":"three",
    "sex":"female",
    type: 1,
  }
];

/**
 * map 遍历数组，可以用 return 退出本次循环，会返回 return 的数据
 * forEach 遍历数组，可以用 return 退出本次循环，没有返回值
 * 
 * map 和 forEach 都不可以使用 continue / break 语句
 */
// let res = obj.map((item, index) => {
//   if (index === 1) {
//     console.log('work');
//     return;
//     // break;
//     // continue;
//   }
//   console.log('index -- ', index);
//   console.log('item -- ', item);
//   return item;
// });
// console.log('res -- ', res);
// console.log('==============');

// let resForEach = obj.forEach((item, index) => {
//   if (index === 1) {
//     console.log('work');
//     // return;
//     // break;
//   }
//   console.log('index -- ', index);
//   console.log('item -- ', item);
//   return item;
// });
// console.log('resForEach -- ', resForEach);

/**
 * filter 遍历过滤函数，返回一个新数组
 * callback 需要用 return 语句返回数据，否则新数组为空数组
 */
// let data = obj.filter((item, index) => {
//   return index < 2
// });
// console.log('filter -- ', data);

// let every = obj.every((item) => item.type === 1);
// let every = obj.every((item) => item.sex === 'mail');
// console.log('every -- ', every);

// let some = obj.some(item => item.sex === 'female');
// console.log('some -- ', some);

// let reduce = obj.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue.type;
// }, 0);
// console.log('reduce -- ', reduce);