import { gql } from "apollo-server";
export const typeDefs = gql `
  scalar DateTime

  enum Role {
    USER
    ADMIN
  }

  type User {
    id: Int
    fullName: String
    email: String
    password: String
    imageUrl: String
    role: Role!
    accounts: [Account!]!
    createdAt: DateTime
  }

  type Account {
    id: Int
    userId: Int
    user: User
    type: String
    balance: Float
    transactions: [Transaction!]!
  }

  type Transaction {
    id: Int
    accountId: Int
    account: Account
    type: String
    amount: Float
    note: String
    createdAt: DateTime
  }
  input UserInput {
    fullName: String
    email: String
    password: String
    imageUrl: String
    role: Role!
  }

  input LoginInput {
    email: String
    password: String
  }

  type AuthPayload {
    user: User
    token: String
  }

  input AccountInput {
    userId: Int
    type: String
    balance: Float
  }

  input TransactionInput {
    accountId: Int
    type: String
    amount: Float
    note: String
  }

  type Query {
    users: [User!]!
    accounts: [Account!]!
    account(id: ID!): Account
  }

  type Mutation {
    register(input: UserInput!): User!
    login(input: LoginInput!): AuthPayload!
    createAccount(input: AccountInput!): Account!
    transactions(input: TransactionInput!): Transaction!
  }
`;
//# sourceMappingURL=typeDefs.js.map