
const data = {
    "url":"https://omniwallet.3trade.xyz/v0/user/authenticate",
    request:{"username":"Kavita123",
    "password":"Kavita@123"},
    schema: {
        "type": "object",
        "properties": {
          "status": {
            "type": "integer"
          },
          "message": {
            "type": "string"
          },
          "data": {
            "type": "object",
            "properties": {
              "username": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "partyId": {
                "type": "string"
              },
              "counterpartyId": {
                "type": "string"
              },
              "accessToken": {
                "type": "string"
              }
            },
            "required": [
              "username",
              "email",
              "partyId",
              "counterpartyId",
              "accessToken"
            ]
          }
        },
        "required": [
          "status",
          "message",
          "data"
        ]
      },
    statusCode: 200
}


module.exports= data;







       




