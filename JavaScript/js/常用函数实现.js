/**
 * 将数字类型转换成带有两位小数的字符型(通过正则表达式)
 */
function returnFloat(value) {
  var value = Math.round(parseFloat(value) * 100) / 100;
  var xsd = value.toString().split(".");
  if (xsd.length == 1) {
    value = value.toString() + ".00";
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + "0";
    }
    return value;
  }
}

console.log(returnFloat(2));
console.log(returnFloat(2.1));
console.log(returnFloat(2.34343));
console.log(returnFloat(2.5343));