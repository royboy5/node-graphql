export { default as UserType } from './userType'
export { default as CompanyType } from './companyType'
export { default as PeopleType } from './peopleType'
export { default as StarshipType } from './starshipType'

/*
  - Queries -
    falcon:starship(id: "10") {
    name
    model
    manufacturer
    cost_in_credits
    length
    crew
    passengers
    cargo_capacity
    consumables
    hyperdrive_rating
    MGLT
    starship_class
    pilots
    films
    created
    edited
    url
  }
  luke:people(id: "1") {
    name
    height
    mass
    hair_color
    skin_color
    eye_color
    birth_year
    gender
    homeworld
    films
    species
    vehicles
    starships
    created
    edited
    url
  }

  {
    users {
      id
      firstName
      age
      people {
        name
        species
        starships
      }
    }
  }
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
