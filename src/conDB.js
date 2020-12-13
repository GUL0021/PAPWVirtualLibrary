const db = require("knex")({
    client: "pg",
    connection: {
      database: "virtuallibrary",
      host: "localhost",
      password: "1",
      user: "tomas",
    },
  });
  
  module.exports = {
    db,
  };