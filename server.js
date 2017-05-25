var graphql = require ('graphql').graphql
var express = require('express')
var graphQLHTTP = require('express-graphql')
var Schema = require('./schema')


var query = 'query { todos { id, title, completed } }'
graphql(Schema, query).then( function(result) {
    console.log(JSON.stringify(result,null," "));

});



var app = express()
    .use('/', graphQLHTTP({ schema: Schema, pretty: true, graphiql: true }))
    .listen(3000, function (err) {
        console.log('GraphQL Server is now running on localhost:3000');
    });