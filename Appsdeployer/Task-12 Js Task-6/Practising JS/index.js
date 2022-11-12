// What is JSON?
// JSON is a acronym of Javascript object notation. It is 
// used to store the data in a loggical manner.
// The JSON file/object can be transported from client to 
// server, server to client and from server to server as well

// Examples of JSON

// var Json = {"name": 'Kartik', "Course": "BTECH", age: 21};
// console.log(Json.Course);
// console.log(Json.name);
// console.log(Json.age);

// Points to remember
// - It generates and stores the data from user input.
// - It can also build and verifying the data.


// There are two methods that we can use in JSON
// 1-> JSON.stringify()
// 2-> JSON.parse()

// JSON.stringify() - As the name suggests, it is used to convert an Javascript object or value to a string
// JSON.parse() - This method is used to convert any string to a Javascript Object or value.

// Example for JSON

// var Json = {"name": "Kartik", "Course": "BTECH", "Email": "kartikkulshreshtha2507@gmail.com"};
// console.log(JSON.stringify(Json))
// console.log(Json.Email);

// var obj = '{"Name": "Kartik", "Email": "kartikkulshreshtha2507@gmail.com", "Course": "BTECH"}';
// console.log(JSON.parse(obj));
// Output - {Name: 'Kartik', Email: 'kartikkulshreshtha2507@gmail.com', Course: 'BTECH'}
// obj.Name = "Ashwini";
// var newObj = JSON.parse(obj);
// newObj.Name = "Ashwini";
// console.log(newObj.Name);

// One thing to remember
// we cannot change any String's value until we change it to an object same in the above example


// let Val = {Name: 'Kartik', Email: 'kartikkulshreshtha2507@gmail.com', Course: 'BTECH'};
// let obj = Val.map((object) => {
//     if(object.Email === 'kartikkulshreshtha2507@gmail.com'){
//         object.Email = 'kt@gmail.com';
//     }
// });
// console.log(obj.Email);