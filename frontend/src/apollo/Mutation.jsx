import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  mutation ($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        fullName
        role
      }
    }
  }
`;

export const USER_REGISTER = gql`
  mutation ($input: UserInput!) {
    register(input: $input) {
      id
      fullName
      email
      role
      imageUrl
    }
  }
`;

export const ADD_ACCOUNT = gql`
  mutation ($input: AccountInput!) {
    createAccount(input: $input) {
      id
      balance
      type
      userId
    }
  }
`;

export const ADD_TRANSACTION = gql`
  mutation ($input: TransactionInput!) {
    transactions(input: $input) {
      id
      type
      note
      amount
    }
  }
`;
