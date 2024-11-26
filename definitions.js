
import { gql } from 'apollo-server-express';
// GraphQL Type Definitions (Schema)
const typeDefs = gql`
    type StudentGrade {
    _id : IDField
    student_id: Int!
    class_id: Int!
    scores: [Score!]!
    email : String
    }

    # Subtype for the _id field
    type IDField {
    oid: String!
    }

    # Subtype for each score entry
    type Score {
    type: String!
    score: Float
    }

    type User {
    firstName: String!
    lastName: String!
    age: Int!
    gender: String!
    hair: Hair
    }

    type Hair {
    color: String!
    }
    

  type Query {
    getGardesByEmail(email: String!): StudentGrade!
    getGardesByClassID(class_id: Int!): [StudentGrade!]!
    getUserByID(id: Int!) : User
  }

  type Mutation {
  createGrade(email: String!, class_id:Int!, student_id:Int!): StudentGrade!
  }
`;

export default typeDefs;
