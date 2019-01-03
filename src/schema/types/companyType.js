import axios from 'axios'
import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from 'graphql'
import { UserType } from '.'

/*
 * arrow function in 'fields' to fix scoping issue
 * when trying to do 2 way bindings
 */
export default new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve (parentValue, args) {
        return axios
          .get(`http://localhost:5001/companies/${parentValue.id}/users`)
          .then(resp => resp.data)
      }
    }
  })
})
