const { db } = require("../conDB");

const getAllBooks = async () => {
  return db("books").join("genres","books.genre_id","=","genres.id").select("*");
};

const getGenreByRoute = async (route) => {
  return db("genres").where({ route }).first();
};

const searchBooks = (searchBooks) => {
  return db("books")
  .where("title", "ILIKE", `%${searchBooks}%`)
  .orWhere("author", "ILIKE", `%${searchBooks}%`)
  .join("genres","books.genre_id","=","genres.id")
};

const getBooksByGenreId = async (genre_id) => {
  return db("books").where({ genre_id }).join("genres","books.genre_id","=","genres.id");
};

const insertBook = async (title, genre_id, author, link) => {
  return db("books").insert({ title, genre_id, author, link });
};

const getGenres = async () => {
  return db("genres").select("*");
};

module.exports = {
  getAllBooks,
  searchBooks,
  getBooksByGenreId,
  getGenreByRoute,
  insertBook,
  getGenres,
};
