import { GraphQLSchema } from 'graphql'

import query from './queries/rootQuery'
import mutation from './mutations/userMutations'

// Schemas - How the data is arranged and accessed
export default new GraphQLSchema({
  // Root query - landing spot for graph node
  query,
  // access and changes to the data
  mutation
})
