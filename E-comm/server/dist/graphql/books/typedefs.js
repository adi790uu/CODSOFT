"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedefs = void 0;
exports.typedefs = `#graphql

  type Review {
    user: User
    description: String!
  }

  input createReview {
    userId: String,
    bookId: String,
    description: String
    rating: Int
  }

  type Book {
    id: String!
    title: String
    description: String
    price: Int
    rating: Int
    author: String
    stock: Int
    imageUrl: String
    views: Int
    comments: [Review]
  }

  input createBookInputs {
    title: String!
    description: String!
    price: Int!
    author: String!
    stock: Int!
    imageUrl: String!
  }

  input updateBook {
    price: Int
    stock: Int
    id: ID!
  }

  input updateRating {
    id: ID!
    rating: Int!
  }

  input createCartItem {
    userId: ID!,
    bookId: ID!,
  }

  type Cart {
    id: ID!
    userId: ID!,
    bookId: ID!,
    quantity: Int,
  }

`;
