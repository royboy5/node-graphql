import axios from 'axios'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql'

import { PeopleType, StarshipType, UserType, CompanyType } from '.'

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

export default RootQuery
