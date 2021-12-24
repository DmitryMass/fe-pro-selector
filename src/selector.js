const object = {
  test: {
    myField: {
      "value string": "result",
    },
  },
};

let keys = ["field", "test"];
function selector(obj, keys) {
  // Ваше решение должно быть здесь

  for (i = 0; i < keys.length; i++) {
    let result = keys[i];
    if (obj.hasOwnProperty(result)) {
      obj = obj[result];
    } else {
      return " ";
    }
    return obj;
  }

  //   keys.forEach(function (item) {
  //     if (object[keys]) {
  //       object = object[keys];
  //     } else {
  //       return " ";
  //     }
  //   });
}

console.log(selector(object, ["test", "myField", "value string"])); // => 'result'
console.log(selector(object, ["test", "notExistField", "value string"])); // => ''

// let object = {
//   field: {
//     test: "result",
//   },
// };
// let keys = ["field", "test"];
// function selector(obj, keys) {
//   // Ваше решение должно быть здесь
//   keys.forEach(function (item) {
//     if (item[0] !== null || item[1] !== null) {
//       console.log(object.field.test);
//     } else if (item[0] === null || item[1] === null) {
//       item[0] = " ";
//     } else {
//       object = " ";
//     }
//   });
// }

// console.log(selector(object, ["field", "test"]));

// let object = {
//   field1: {
//     te222st: "result",
//   },
// };
// let keys = ["field", "test"];
// function selector(obj, keys) {
//   // Ваше решение должно быть здесь
//   keys.forEach(function (item) {
//     if (object[keys]) {
//       object = object[keys];
//     } else {
//       return " ";
//     }
//   });
// }

// console.log(selector(object, ["field", "test"]));

module.exports = selector;
