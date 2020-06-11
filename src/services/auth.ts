import { gql } from "apollo-boost";

export const request = gql`
  mutation obterToken($username: String!, $password: String!) {
    obterToken(username: $username, password: $password) {
      token
      funcionario {
        id
        nome
        email
      }
    }
  }
`;
