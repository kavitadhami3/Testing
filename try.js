const express= require('express');
const { string } = require('joi');
const process= require('process');

const app= express();
app.use(express.json());

app.get(('/api/course'),(req, res)=>{
res.send('My name is Kavita');
})

let ids = [{id:1 , name:"Kavita" } , {id:2 , name:"Aakriti"} , {id:3 , name:"Madhur"}]

app.post(('/api/course/'), (req, res)=>{
    const tableOfTwo = [];
    for(let i = 1 ; i<=10 ; i++){
    tableOfTwo.push((req.body.number) * i)
    }
  res.send( tableOfTwo);
});

app.post(('/api/matcher/'), (req, res)=>{
    let values;
    if(ids.forEach((data) => {
        if(data.id === parseInt(req.body.id)) {
            values = data;
        }
    }))
    console.log(values);
    res.send(JSON.stringify(values));
});

app.post(('/api/courseupdate/'), (req, res)=>{
    const dataId = {
        id:Math.random() ,
        name:req.body.name
    }
    ids.push(dataId);
    res.send(ids);
});


const PORT= process.env.PORT|| 3000;
app.listen(PORT , ()=> {console.log('Port is listning', PORT)});



// module.exports = getData;
  