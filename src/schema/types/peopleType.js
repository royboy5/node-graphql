import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} from 'graphql'

/*
 * arrow function in 'fields' to fix scoping issue
 * when trying to do 2 way bindings
 */
export default new GraphQLObjectType({
  name: 'People',
  fields: () => ({
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
  })
})
