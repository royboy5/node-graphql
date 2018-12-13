import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql'
import axios from 'axios'

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    name: { type: GraphQLString },
    height: { type: GraphQLString }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve (parentValue, args) {
        return axios
          .get(`https://swapi.co/api/people/${args.id}`)
          .then(resp => resp.data)
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
