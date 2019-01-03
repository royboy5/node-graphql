export { default as UserType } from './userType'
export { default as CompanyType } from './companyType'
export { default as PeopleType } from './peopleType'
export { default as StarshipType } from './starshipType'

/*
  - Fragments -
  fragment companyDetails on Company {
    id
    name
    description
  }

  - Mutations -
  mutation {
    addUser(firstName: "Roy", age: 5) {
      id
      firstName
      age
    }
    deleteUser(id: 4) {
      id
      firstName
      age
    }
    editUser(id: 1, firstName: "Dog", age: 35, companyId: 20) {
      id
      firstName
      age,
      company {
        id
        name
        description
      }
    }
  }
*/
