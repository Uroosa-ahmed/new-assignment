// Task 1
// function addNumberClosure(number){
//     return function(x){
//         return x + number;
//     }
// }
// const addFive = addNumberClosure(5);
// console.log(addFive(10));
// console.log(addFive(20));

// Task 2..

// function searchArray(array,value){
//     if(array.length === 0){
//         return false;
//         // Base case:value not found
//     }else if (array[0] === value){
//         return true;
//     }
//     else{
//         return searchArray(array.slice(1),
//         value);
//  //Recursive case:search the rest of the array

//     }
// }
// const array=[1,2,3,4,5];
// console.log(searchArray(array,3));
// // console.log(searchArray(array,6));


// Task 3

// let input_text = prompt("enter content:")
// let para = document.createElement("p");
// let parent = document.getElementsByTagName("html")[0];
// function para_work(string){
// para.innerHTML = string;
// console.log(para.innerHTML );
// parent.appendChild(para);
// parent.insertAdjacentElement("afterbegin.para");

// }
// para_work(input_text)

// Task 4u

// function addListItem(text)
//  {
//     // Find the unordered list in the HTML document
//     var ul = document.getElementById('my-list');

//     // Create a new list item element
//     var li = document.createElement('li');

//     // Set the text content of the new list item to the specified text
//     li.textContent = text;

//     // Append the new list item to the unordered list
//     ul.appendChild(li);
//   }

 



// Task 5
// function changeBackgroundColor(p, newColor){
// p.style.backgroundColor = newColor;
// }
// // How to Use
// const newBg = document.getElementById('element');
// changeBackgroundColor(newBg,'pink');

// Task 6 
// function saveTolocalStorage(key,value){
//     localStorage.setItem(key,JSON.stringify(value))
// }
// const myobject={name:'john',age:30};
// saveTolocalStorage('myKey',myobject);


// Task 7
// function getfromLocalStorage(key){
//     const value = localStorage.getItem(key);
//     return JSON.parse(value);

// }
// const myObject = getfromLocalStorage('mykey');
// console.log(myObject);

// task 8
// function saveObjectToLocalStorage(obj) {
//     // Save each property of the object to localStorage
//     for (const [key, value] of Object.entries(obj)) {
//       localStorage.setItem(key, JSON.stringify(value));
//     }
  
//     // Retrieve each property from localStorage and build a new object
//     const newObj = {};
//     for (const [key, value] of Object.entries(obj)) {
//       const savedValue = localStorage.getItem(key);
//       newObj[key] = JSON.parse(savedValue);
//     }
  
//     return newObj;
//   }
  
// //   HOW TO USE
  
//   const myObject = {name: 'John', age: 30, city: 'New York'};
//   const retrievedObject = saveObjectToLocalStorage(myObject);
//   console.log(retrievedObject);