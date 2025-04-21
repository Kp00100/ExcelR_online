// //js object
// let obj1 = {
//   name: "John",
//   "age": 30,
//   "city": "New York",
// };
// //convert js object to json
// let json1 = JSON.stringify(obj1);

// console.log(obj1);
// console.log(json1);

// // convert json to js object
// let json2 = '{"name":"John","age":30,"city":"New York"}';
// let obj2 = JSON.parse(json2);
// console.log(json2);
// console.log(obj2);



// const json1={
//     "name": "John",
//     "age": 30,
//     "city": "New York"
// }
// console.log(JSON.stringify(json1));
// const json_list=[1,2,3,4,5,6,7,8,9,10]
// console.log(JSON.stringify(json_list));
// const json_list2=[
//     {"name": "John", "age": 30, "city": "New York"},    
//     {"name": "John", "age": 30, "city": "New York"},    
// ];
// console.log(JSON.stringify(json_list2));

// const nested_object={
//     "name": "John",
//     "age": 30,
//     "city": "New York",
//     "skills": ["JavaScript", "Python", "Java"],
//     "address": {
//       "street": "123 Main St",
//       "city": "Any town",
//       "state": "CA"
//     } 
//   };
// let nested_json=JSON.stringify(nested_object);
// console.log(nested_json);

// console.log(nested_object.name);
// console.log(nested_object["age"]);


// async function fetchData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const data = await response.json();
//     console.log(data);
//     console.log(data.name);
//     console.log(data.company.name)
//     console.log(data.address["street"]);

//     console.log(Object.keys(data));//keys of the object
//     console.log(Object.values(data));//values of the object
//     console.log(Object.entries(data));//entries(key-value) of the object
    
//   }
//   fetchData();


const json1={
    "name": "John",
    "age": 30,
    "city": "New York"
}
// const json2={
//     "email": "p7NlQ@example.com",
//     "phone": "1234567890"
// }
// console.log(json1);
// console.log(json2);
// json1.phone=345678;
// json1["email"]=json2.email;


//  delete json2.phone;
//  delete json2["email"];
// const merged_json=Object.assign(json1,json2);
// const merged_json={...json1,...json2};
// console.log(merged_json);


// console.log(json1);
// for(let key in json1){
//     console.log(key+" : "+json1[key]); 
// }
// Object.keys(json1).forEach(key => {
//     console.log(key+" : "+json1[key]); 
// });  
// Object.entries(json1).forEach(key => {
//     console.log(key+" : "+json1[key]);  
// });  
// Object.values(json1).forEach(value => {
//     console.log(value);  
// });  
 

const user={
    "name": "John",
    "age": 30,
    "city": "New York",
    "skills": ["JavaScript", "Python", "Java"],
   
}
// destructuring the object
 const {name,age}=user;
console.log(name);
console.log(age);
// console.log(city);

// destructing and renaming the object
const{name:userName , age:userAge}=user;
console.log(userName);

// destructing and adding default value to the object
const{country="India"}=user;
console.log(country);