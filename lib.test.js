const labs= require('./lib');

describe('Test cases for greet', ()=>{

    it('Postive test case', async()=>{
       
        const rename= await labs.greet('Kavita');
        console.log(rename);
        const surname= 'Dhami';
        (surname===rename) ? surname: 'Error is coming';
        // expect(surname).toMatch(rename);
    })
})