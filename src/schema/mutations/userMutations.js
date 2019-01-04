import axios from 'axios'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'

import { UserType } from '../types'

const userMutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      // return type of data from resolve()
      type: UserType,
      args: {
        // new GraphQLNonNull doesn't check type!
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        companyId: { type: GraphQLInt }
      },
      resolve (parentValue, { firstName, age, companyId }) {
        return axios
          .post(`http://localhost:5001/users`, { firstName, age, companyId })
          .then(resp => resp.data)
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve (parentValue, { id }) {
        return axios
          .delete(`http://localhost:5001/users/${id}`)
          .then(resp => resp.data)
      }
    },
    editUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        companyId: { type: GraphQLInt }
      },
      resolve (parentValue, args) {
        return axios
          .patch(`http://localhost:5001/users/${args.id}`, args)
          .then(resp => resp.data)
      }
    }
  }
})

export default userMutations
