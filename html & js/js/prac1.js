// setTimeout(function(){
// console.log('3 seconds have passed');
// })

// var time = 0;
// // setInterval(function(){
// //     time+=2;
// //     console.log(time + ' seconds have passed');
// // }, 2000);

// var timer = setInterval(function(){
//     time+=2;
//     console.log(time + ' seconds have passed');
//     if(time > 5){
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

var counter = function(arr){
    return 'there are ' + arr.length + ' elements in this array';
};
console.log(counter(['enna', 'riya' , 'tina']));