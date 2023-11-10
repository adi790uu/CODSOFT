export const mutations = `#graphql
    createBook(input: createBookInputs): Book
    updateBook(input: updateBook): Book
    updateRating(input: updateRating): Book
    deleteBook(input: ID): String
    increaseView(id: ID): String
    createReview(input: createReview): Review
    addToCart(input: createCartItem): Cart
`;
