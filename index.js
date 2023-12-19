const getData = require('./try');
let i;
before(() => {
    i = 1;
    console.log(i);
}, 10000);

test('add 1 + 2 to equal 3',()=>{
    i = 3;
    console.log(i);
    const data = getData(1,2);
    expect(data).toBe(3);
});

test('add 1 + 3 to equal 4',()=>{
    console.log(i);
    const data = getData(1,3);
    expect(data).toBe(4);
});





