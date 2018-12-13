import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} from 'graphql'
import axios from 'axios'

import { PeopleType, StarshipType } from './types'

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
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

export default new GraphQLSchema({
  query: RootQuery
})
