// function test(type) {
//   if (type === '丰田' || type === '本田' || type === '宝马') {
//     console.log('这是一辆汽车');
//   }

//   // 类似的这种情况，可以将条件提取到数组中，让代码看起来更整洁
//   // 后面如果需要添加条件判断，直接在数组中添加新的内容即可
//   // 新创加一个数组，将新的条件放在新数组，然后再将内容合并
//   // 在不修改原来代码的基础上去实现新的功能，会有一定的代码冗余，但是这样子写会不会更好一些？
//   // 开发过程中，做二次开发，以最小改动为原则？
//   let carTypeList = ['奔驰', '迈巴赫', '雷克萨斯', '劳斯莱斯'];
//   const newList = ['凯迪拉克', '兰博基尼', '法拉利'];
//   carTypeList = [...carTypeList, ...newList];

//   if (carTypeList.includes(type)) {
//     console.log('这是一辆很贵的车');
//   }
// }

// test('丰田');
// test('迈巴赫');
// test('兰博基尼');

// function test(fruit, quantity) {
//   const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

//   // 条件 1：fruit 必须有值
//   // if (fruit) {
//   //   // 条件 2：必须为红色
//   //   if (redFruits.includes(fruit)) {
//   //     console.log('red');

//   //     // 条件 3：数量必须大于 10
//   //     if (quantity > 10) {
//   //       console.log('big quantity');
//   //     }
//   //   }
//   // } else {
//   //   throw new Error('No fruit!');
//   // }

//   if (!fruit) return;
//   if (!redFruits.includes(fruit)) return;
//   if (quantity < 10) return;

//   console.log('Big quantity');
// }

// // 测试结果
// // test(null); // 抛出错误：No fruits
// test('hahah'); // 打印：red
// test('apple', 20); // 打印：red，big quantity

// // 在发现无效条件时，提前 return

// 使用函数的默认参数和结构

// const fruitColor = {
//   red: ['apple', 'strawberry'],
//   yellow: ['banana', 'pineapple'],
//   purple: ['grape', 'plum'],
// };

// const fruitColor = new Map()
//   .set('red', ['apple', 'strawberry'])
//   .set('yellow', ['banana', 'pineapple'])
//   .set('purple', ['grape', 'plum'])

// function test(color) {
//   // 使用 switch case 语句，根据颜色找出对应的水果
//   // switch (color) {
//   //   case 'red':
//   //     return ['apple', 'strawberry'];
//   //   case 'yellow':
//   //     return ['banana', 'pineapple'];
//   //   case 'purple':
//   //     return ['grape', 'plum'];
//   //   default:
//   //     return [];
//   // }

//   console.log(fruitColor[color] || []);
//   return fruitColor[color] || [];
// }

// //测试结果
// test(null); // []
// test('yellow'); // ['banana', 'pineapple']

// // 使用 Map / Object 字面量 替代 Switch 语句

const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'grape', color: 'purple' }
];

function test() {
  // let isAllRed = true;

  // // 条件：所有的水果都必须是红色
  // for (let f of fruits) {
  //   if (!isAllRed) break;
  //   isAllRed = (f.color == 'red');
  // }

  const isAllRed = fruits.every(fruit => fruit.color === 'red')
  console.log(isAllRed);

  console.log(isAllRed); // false
}
