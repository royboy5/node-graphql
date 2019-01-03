import { GraphQLSchema } from 'graphql'

import RootQuery from './types/root'
import mutation from './mutations/userMutations'

export default new GraphQLSchema({
  query: RootQuery,
  mutation
})
