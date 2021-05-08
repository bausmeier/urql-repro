const {ApolloServer} = require('apollo-server')
const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      viewer: {
        type: new GraphQLObjectType({
          name: 'Account',
          fields: {
            id: {
              type: new GraphQLNonNull(GraphQLID),
            },
          },
        }),
        resolve(_source, _args, context) {
          if (context.isAuthorized) {
            return {id: '123'}
          } else {
            return null
          }
        },
      },
    },
  }),
})

const server = new ApolloServer({
  schema,
  context({req}) {
    return {
      // Just check for the existence of the Authorization header.
      isAuthorized: req.headers.authorization != null,
    }
  },
})
server.listen({port: 8080}).then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})
