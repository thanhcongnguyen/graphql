var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');


// function random(n){
//     var s='';
//     var str =["A","B","C","D","E","F","a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9];
//     for(var i = 0; i<n; i++){
//         var offset = Math.floor(Math.random()*str.length);
//         s += str[offset]
//     }
//
//     return s;
// }

// Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     _id: String
//     name: String
//     score(array: Int): [Int]
//   }
// `);


var schema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Query {
    getDie(numSides: Int): RandomDie
  }
`);
// The root provides a resolver function for each API endpoint
// var root = {
//    _id: random(10),
//     name:()=>{
//        return "Nguyen Thanh Cong"
//     },
//     score:()=>{
//         return {
//             array:10,
//             array:8,
//             array:5,
//         }
//     }
// };

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(3000,()=>{
    console.log('Running a GraphQL API server at localhost:3000/graphql')
});