let multiply = (num1, num2) => {
    return num1 * num2
};

let createUser = (name, surname) => {
  let obj = {
    firstName: name,
    lastName: surname
  }
  return obj
}

let myArray = ['Hulk', 'Iron Man', 'Cap', 'Ant-Man', 'Wasp'];
let checker = (myArray) => {
  return myArray.filter(arrayItem => arrayItem.length > 5)
}

let numToString = (num) => {
  if(typeof num !== 'number'){
    return `you typed ${num}`
  }
  return num.toString()
}

let register = (array) => {
  return array.filter(boolean => boolean ==true).length
}

module.exports = {
  myArray, checker, multiply, createUser, numToString, register
}

