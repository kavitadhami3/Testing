const data = require('./canton');
const axios = require('axios');
const {matchers} = require("jest-json-schema")

console.log(Object.keys(data))


expect.extend(matchers)

function main() {

    describe('Test Cases for Authentication',  () => {

        it('Our first code', async () => {
            const res = await axios.post(data.url,data.request);
            
            // console.log(res.data.data)
            expect(res.data.status).toBe(data.statusCode)
            expect(res.data.data).toMatchSchema(data.schema)
        })
    })

}

main()
