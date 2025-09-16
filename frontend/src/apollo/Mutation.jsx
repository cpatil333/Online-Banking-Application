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
