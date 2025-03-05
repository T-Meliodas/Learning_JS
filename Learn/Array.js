let arr = [
  {
    id: 123,
    name: "thanh1",
    age: 19,
  },
  {
    id: 456,
    name: "thanh2",
    age: 19,
  },
  {
    id: 789,
    name: "thanh3",
    age: 17,
  },
];
// let getName = (arr) => {
//   arr.forEach((person) => {
//     console.log(person.name);
//   });
// };

//getName(arr);
let changeName = arr.map((person) => {
  return {
    id: person.id,
    name: ` Nguyen ${person.name}`,
    age: person.age,
  };
});

//arr.filter((person) => person.age > 17); //people who has age above 17
console.log(changeName);
let newName = changeName.map((newPerson) => newPerson.name);
console.log(newName);

// let newArr = [1, 2, 3, 4, 5];

// let total = newArr.reduce((index, current) => index + current, 0);
// console.log(total);


//