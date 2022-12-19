// console.log('package.json');
// const color= require('colors');
// console.log('hello'.red);
// console.log("Try Nodeman");
// console.log(100+23);
// const fs = require('fs');
// const path = require ('path');
// const dirPath= path.join(__dirname, 'files');
// console.warn(dirpath)
// const fs = require('fs');
// const { resolve } = require('path');
// const path = require('path');
// const dirpath= path.join(__dirname,'crud');
// const filepath= `${dirpath}/apple.txt`;
// // fs.writeFileSync(filepath,'This is a simple text file');
// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated")
// })
// fs.rename(filepath, `${dirpath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file is updated")
// })
// fs.unlinkSync(`${dirpath}/fruit.txt`)
// let a=20;
// let b=0;

// let waitingData= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })
// waitingData.then((data)=>{
//     b=data;
//     console.log(a+b)
// })

const express = require('express');
const path = require('path');
const app =express();

// app.get('',(req,res)=>{
//     res.send(
//         `<h1>Welcome, to home page</h1><a href="/about ">Go to About page</a>`
//         );
// });
// app.get('/about',(req,res)=>{
//     res.send(`<input type="text" placeholder="User name" value="${req.query.name}" />
//     <button>Click Me</button>
//     <a href="/">Go to Home page</a>
//     `)
// });
// app.get('/help',(req,res)=>{
//     res.send([
//         {
//             name: 'saloni',
//             email: 'saloni@gmail.com',
//         },
//         {
//             name: 'pia',
//             email: 'pia@gmail.com',
//         },
//     ]);
// });


const publicpath= path.join(__dirname,'public');

app.use(express.static(publicpath));

app.set('view engine','ejs');
app.get('',(_,resp)=>{
    resp.sendFile(`${publicpath}/index.html`)
});
app.get('/profile',(_,resp)=>{
    const user={
        name:'saloni doshi',
        email:'saloni@gmail.com',
        city:'mumbai',
        skills:['php','js','c++','java','node']
    }
    resp.render('profile',{user});
});
app.post("/login", function (req, res) {
    res.render('home')
})


app.get('/login',(_,resp)=>{
   resp.render('login');
});
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicpath}/about.html`)
});
app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicpath}/help.html`)
});
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicpath}/nopage.html`)
})


app.listen(5000);


