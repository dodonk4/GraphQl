import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../graphql/resolvers.js';

const typeDefs = `
    type Query {
        products: [Product]
        deleteProduct(name: String): String
        getProduct(name: String): Product
        getUsers: [User]
    }
    type Product {
        _id: ID
        id: Float!
        title: String!
        codigo: Float!
        foto: String!
        precio: Float!
        stock: Float!
        timestap: Float!
    }

    type User {
        _id: ID
        nombre: String
        contrasena: String
        cantidad: [String]
        telefono: Float
        email: String
        direccion: String
        edad: Float
        foto: String
        codigoSecreto: String
        }

    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(input: ProductInputWithName): Product

    }

    input ProductInput {
        _id: ID
        title: String!
        codigo: Float!
        foto: String!
        precio: Float!
        stock: Float!
    }

    input ProductInputWithName {
        _id: ID
        name: String!
        title: String!
        codigo: Float!
        foto: String!
        precio: Float!
        stock: Float!
    }

`;


export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})