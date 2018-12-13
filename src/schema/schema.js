import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLSchema
} from 'graphql'
import axios from 'axios'

const StarshipType = new GraphQLObjectType({
  name: 'Starships',
  fields: {
    name: { type: GraphQLString },
    model: { type: GraphQLString },
    manufacturer: { type: GraphQLString },
    cost_in_credits: { type: GraphQLString },
    length: { type: GraphQLString },
    crew: { type: GraphQLString },
    passengers: { type: GraphQLString },
    cargo_capacity: { type: GraphQLString },
    consumables: { type: GraphQLString },
    hyperdrive_rating: { type: GraphQLString },
    MGLT: { type: GraphQLString },
    starship_class: { type: GraphQLString },
    pilots: { type: new GraphQLList(GraphQLString) },
    films: { type: new GraphQLList(GraphQLString) },
    created: { type: GraphQLString },
    edited: { type: GraphQLString },
    url: { type: GraphQLString }
  }
})

const PeopleType = new GraphQLObjectType({
  name: 'People',
  fields: {
    name: { type: GraphQLString },
    height: { type: GraphQLString },
    mass: { type: GraphQLString },
    hair_color: { type: GraphQLString },
    skin_color: { type: GraphQLString },
    eye_color: { type: GraphQLString },
    birth_year: { type: GraphQLString },
    gender: { type: GraphQLString },
    homeworld: { type: GraphQLString },
    films: { type: new GraphQLList(GraphQLString) },
    species: { type: new GraphQLList(GraphQLString) },
    vehicles: { type: new GraphQLList(GraphQLString) },
    starships: { type: new GraphQLList(GraphQLString) },
    created: { type: GraphQLString },
    edited: { type: GraphQLString },
    url: { type: GraphQLString }
  }
})

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
