var { graphql, buildSchema } = require('graphql')



// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
     type Query {
        hello: String
        name: String
        number: Int
      }
`)

// The root provides a resolver function for each API endpoint
var root = {
        hello: () => {
            return 'Hello world!';
        },
        name: () =>{
            return "nguyen thanh cong"
        },
        number:()=>{
            return "1993"
        }
};

// Run the GraphQL query '{ hello }' and print out the response

graphql(schema, '{ hello,name,number }', root).then((response) => {
    console.log(response);
});
