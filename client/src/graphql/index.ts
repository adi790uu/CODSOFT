import { gql } from "@apollo/client";

export const GET_CART = gql`
    query Query($input: getCartInput) {
      getCart(input: $input) {
        quantity
        book {
          id
          imageUrl
          price
          title
        }
      }
    }
  `;
