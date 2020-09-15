const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.i5ohh.mongodb.net/poc-graphql?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, "schema.graphql"), 
    resolvers
});

server.start();