export default {
  Query: {
    users: (parent, arg, { db }) => {
      return Object.values(db.users);
    },
    user: (parent, { id }, { db }) => {
      return db.users[id];
    },
  },
};
