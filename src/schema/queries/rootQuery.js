import axios from 'axios'
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull

} from 'graphql'

import { PeopleType, StarshipType, UserType, CompanyType } from '../types'

// Root Queries are entry points to a particular part of our data
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  // The information GraphQL can tell you about
  fields: {
    user: {
      // Has type of
      type: UserType,
      // Arguments passed to this query
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
      // How to get data
      // Can be an API Call, DB Call, etc
      // parentValue - user object that is fetched
      // args - what is passed in to the query
      resolve (parentValue, args) {
        return axios
          .get(`http://localhost:5001/users/${args.id}`)
          .then(resp => resp.data)
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve () {
        return axios
          .get(`http://localhost:5001/users`)
          .then(resp => resp.data)
      }
    },
    company: {
      type: CompanyType,
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
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
    peoples: {
      type: new GraphQLList(PeopleType),
      resolve () {
        return axios
          .get(`https://swapi.co/api/people`)
          .then(resp => resp.data.results)
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
    },
    starships: {
      type: new GraphQLList(StarshipType),
      resolve () {
        return axios
          .get(`https://swapi.co/api/starships`)
          .then(resp => resp.data.results)
      }
    }
  }
})

export default RootQuery
