const obj = {
  test: {
    myField: {
      "value string": "result",
    },
  },
};

const selector = (obj, keys) => {
  // Ваше решение должно быть здесь
  let curObj = obj;
  keys.forEach(function (item) {
    if (curObj[item]) {
      curObj = curObj[item];
    } else {
      curObj = " ";
    }
  });
  return curObj;
};
console.log(selector(obj, ["test", "myField", "value string"])); // => 'result'
console.log(selector(obj, ["test", "notExistField", "value string"])); // => ''

module.exports = selector;
