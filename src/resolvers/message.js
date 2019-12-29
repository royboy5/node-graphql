export default {
  Query: {
    messages: (parent, args, { db }) => {
      console.log(db, 'messages');
      return Object.values(db.messages);
    },

    message: (parent, { id }, { db }) => {
      return db.message(id);
    },
  },

  Message: {
    user: (parent, { id }, { db }) => {
      return db.users[parent.userId]
    }
  }
};
