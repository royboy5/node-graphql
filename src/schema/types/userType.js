import axios from 'axios'
import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql'
import { CompanyType, PeopleType } from '.'

/*
 * arrow function in 'fields' to fix scoping issue
 * when trying to do 2 way bindings
 */
export default new GraphQLObjectType({
  name: 'Users',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve (parentValue, args) {
        console.log(parentValue, args)
        return axios
          .get(`http://localhost:5001/companies/${parentValue.companyId}`)
          .then(resp => resp.data)
      }
    },
    people: {
      type: PeopleType,
      resolve (parentValue, args) {
        return axios
          .get(`https://swapi.co/api/people/${parentValue.id}`)
          .then(resp => resp.data)
      }
    }
  })
})
