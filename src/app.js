import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import compression from 'compression';
import depthLimit from 'graphql-depth-limit';

import db from './data';
import schema from './schema';
import resolvers from './resolvers';

const app = express();
app.use('*', cors());
app.use(compression());

const apollo = new ApolloServer({
  typeDefs: schema,
  resolvers,
  validationRules: [depthLimit(5)],
  context: {
    db,
  },
});

apollo.applyMiddleware({ app });

export default app;
