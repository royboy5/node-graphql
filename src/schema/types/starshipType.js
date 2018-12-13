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
  name: 'Starships',
  fields: () => ({
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
  })
})
