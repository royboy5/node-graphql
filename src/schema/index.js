import axios from 'axios'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLNonNull
} from 'graphql'

import { PeopleType, StarshipType, UserType, CompanyType } from './types'

import userMutations from './mutations/userMutations'

console.log(userMutations)

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve (parentValue, args) {
        return axios
          .get(`http://localhost:5001/users/${args.id}`)
          .then(resp => resp.data)
      }
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLInt } },
      resolve (parentValue, args) {
        return axios
          .get(`http://localhost:5001/companies/${args.id}`)
          .then(resp => resp.data)
      }
    },
    people: {
      type: PeopleType,
      args: { id: { type: GraphQLString } },
      resolve (parentValue, args) {
        return axios
          .get(`https://swapi.co/api/people/${args.id}`)
          .then(resp => resp.data)
      }
    },
    starship: {
      type: StarshipType,
      args: { id: { type: GraphQLString } },
      resolve (parentValue, args) {
        return axios
          .get(`https://swapi.co/api/starships/${args.id}`)
          .then(resp => resp.data)
      }
    }
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      // return type of data from resolve()
      type: UserType,
      args: {
        // new GraphQLNonNull doesn't check type!
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
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

export default new GraphQLSchema({
  query: RootQuery,
  mutation
})
