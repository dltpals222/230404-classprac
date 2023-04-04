const exampleObject = {
  name : {
    korean : '이세민',
    english : 'Lee Semin'
  },
  age : 11,
  email : 'leesemin@dltals.com',
}

console.log(exampleObject.hasOwnProperty('name'));
console.log(exampleObject.hasOwnProperty('korean'));
console.log(exampleObject.hasOwnProperty('age'));
console.log(exampleObject.hasOwnProperty('address'));