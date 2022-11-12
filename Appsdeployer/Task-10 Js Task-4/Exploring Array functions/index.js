let student = [
    { name: 'Kartik', age: 20, course: 'Btech' },
    { name: 'Ashwini', age: 30, course: 'MBA' },
    { name: 'Ashish', age: 33, course: 'BE' },
]

// Unshift() = It is used to add an element in the front of the array

// let newStudent = {name: 'Anjana', age: 49, course: 'BA'};
// student.unshift(newStudent);
// console.table(student);


// Push() = It is used to add an element in the end of the array

// let newStudent = {name: 'Anjana', age: 49, course: 'BA'};
// student.push(newStudent);
// console.table(student);

// Pop() = It is used to delete the last element of the array

// student.pop();
// console.table(student);


// splice() = It is used to add an element at a particular position in the array

// let newStudent = {name: 'Anjana', age: 49, course: 'BA'};
// student.splice(2, 0, newStudent);
// console.table(student);


// let newStudent = {name: 'Anjana', age: 49, course: 'BA'};
// student.splice(5, 0, newStudent);
// console.table(student);


// find() = It is used to find a particular object in the array

// let Student = student.find((student) => student.name === 'Kartik');
// console.log(Student);

// let Student = student.find((student) => student.number === 122222222);
// console.log(Student);


// filter() = is used to get only filtered objects.

let newStudent = { name: "Kartik", age: 21, course: 'btech' };
student.push(newStudent);
let newStudent2 = { name: "Kartik", age: 20, course: 'btech' };
student.push(newStudent2);

// // let Filter = student.filter((student) => student.name === "Kartik");
// // console.log(Filter);
// let Filter = student.filter((student) => student.name === "Kartik" && student.age === 20);
// console.log(Filter);


// map() = by using this function we can iterate over through the array

// let Map = student.map((student) => {
//     if(student.age > 22){
//         return 'Elegible';
//     }
//     else{
//         return "Not Elegible";
//     }
// });
// console.table(student);
// console.log(Map)
// console.log(Map[0]);


// shift() is used to remove the first element of the array

// console.table(student);
// student.shift();
// console.table(student);


// slice() basically it is used to get the array from the given index to the given index

// let Slice = student.slice(0, 3);
// console.table(Slice);

// let Slice = student.slice(1, 3);
// console.table(Slice);


// sort() is used to sort the array in increasing/decreasing order


// // Ascending order
// let Sort = student.sort((s1, s2) => 
//     s1.age < s2.age ? -1 : s1.age > s2.age ? 1 : 0
// )

// Descending Order
// let Sort = student.sort((s1, s2) => 
//     s1.age < s2.age ? 1 : s1.age > s2.age ? -1 : 0
// )

// console.table(Sort);


// reverse() It reverse the array
// console.table(student.reverse());

// One logic for get multiple random values

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}

// const arr = ['b', 'c', 'a', 'd'];
// console.log(getMultipleRandom(arr, 2)); // 👉️ ['a', 'c'];
// console.log(getMultipleRandom(arr, 3)); // 👉️ ['c', 'b', 'c']


// Other Login for the same

// const arr = ['a', 'b', 'c'];
// function getRandom(list){
//     const res = [];
//     for(let i = 1; i <= 2; i++){
//         const randm = Math.floor(Math.random() * list.length);
//         res.push(list[randm]);
//     }
//     console.log(res);
// }
