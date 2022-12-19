// OBJECT LITERAL
// let input = 'name'

// let alien = {
//     name: 'Saloni',
//     tech: 'JS',
// }

// console.log(alien[input]);

//COMPLEX OBJECT
// let alien = {
//     name: 'Saloni',
//     tech: 'JS',
//     laptop1: {
//         cpu: 'i7',
//         ram: 4,
//         brand1: 'HP',
//     }
// }
// delete alien.laptop1
// // console.log(alien.laptop.brand.length);
// // console.log(alien.laptop1.brand?.length);
// console.log(alien);

// FOR IN LOOP
// let alien = {
//     name: 'Saloni',
//     tech: 'JS',
//     laptop1: {
//         cpu: 'i7',
//         ram: 4,
//         brand1: 'HP',
//     }
// }
// for(let key in alien.laptop1)
// {
//     console.log(key, alien.laptop1[key])
// }

// // FUNCTIONS IN JS
// function greet()
// {
//     console.log("Hello World");
// }
// greet();
// console.log(1);
// greet();
// greet();
// greet();

// function return 
// function greet()
// {
//    return "Hello World"
// }
// let str = greet();
// console.log(str);

//function passing
// function greet(user)
// {
// return `hello ${user};
// }
// let user = 'Saloni';
// console.log(greet(user));

//function expression 
// let add = function(num1,num2)
// {
//     return num1 + num2;
// }
// let sum = add
// let result = sum(5,6)
// console.log(result);

//Local Global Variable
//  function greet(u)
//  {
//     console.log(user);
//     return 'Hello ${u}!!'
//  }
//  let user = 'saloni';
//  let str = greet(user);
//  console.log(str);

//Arrow function
// let greet = (user) => {
//    console.log("Hello" + user);
//    return 1;
// }
// console.log(greet('Saloni'));

// let add = (num1,num2) => num1 + num2;

// let sum = add
// let result = sum(5,6)
// console.log(result);

//Methods is JS
// let laptop = {
//    cpu: 'i9',
//    ram: 16,
//    brand: 'HP',

//    greet: function(){
//       console.log('Hello World');
//    }
// }
// laptop.greet();

//Arrays[
// let values = [5,7,9];
// console.log(values[2]);
// let names = ['Saloni','Sneha','Kiran'];
// names[3] = 'Pooja';
// console.log(names);
// let data = ['Saloni' , 1, {tech:'JS'}, function(){console.log("Hello World");}];
// console.log(data);
// data[3]();
// let data = [6,4,2,8,3,5];
// // console.log(data.push(1));
// // console.log(data.pop());
// // console.log(data.unshift(2));
// console.log(data.splice(4,3))
// console.log(data);

// For of loop
// let nums = [];
// nums[0] = 5;
// nums[99] = 9
// for(let n of nums){
//    console.log(n);
// }
// for(let key in nums){
//    console.log(nums[key]);
// }

// // Array Destructing
// let nums = [5,7,4,3]
// console.log(nums);
// // let [a,b,c,d]= nums;  // an extra comma can help to del a num from btw
// // console.log(d);
// let words = "my name is Saloni Doshi".split(' ')
// // let [a,b,c,d,e] = words;
// let [a,b,,...d] = words;
// console.log(d)

// Array for each
// let nums = [42,51,24,98,65,12];
// nums.forEach( (n,i,nums) => {
//   // console.log(n); 
//   // console.log(n*2);
//   console.log(n, i, nums);
// });

//Array Method  Filter
// let nums = [42,51,24,98,65,12];
// nums.filter ( n => n%2===0)
// let result = nums.filter ( n => n%2===0)
//      .map(n => n*2)
//    //   .forEach(n =>{
//    //    console.log(n)
//    //   })
//    .reduce((a,b) => a+b);
//    console.log(result);

//Set in JS
// let nums = new Set("bookkeeper");
// console.log(nums);
// let nums = new Set()
// nums.add(3);
// nums.add(5);
// nums.add(3);
// nums.add("Saloni");
// nums.add("Pooja");
// nums.add("Avni");
// // nums.forEach(value => {
// //    console.log(value);
// // })
// console.log(nums.has(3))

//Maps in JS
// let map = new Map();
// map.set("Saloni","Java");
// map.set("Pooja","Android")
// map.set("Avni","ML")
// map.set("Saloni","AI")
// // console.log(map.keys());
// for(let [k,v]of map){
//    console.log(k, " : ", v);
// }

//Recursion in JS
// let num = 1;
// function show(){
//    console.log("Hi", num);
//    num++;
//    show();
// }
// show();

//Factorial in JS
// function fact(n){
//     if(n==0)
//     return 1;
//     else
//    return n*fact(n-1);
// }
// let num = 170;
// let result = fact(num);
// console.log(result);


