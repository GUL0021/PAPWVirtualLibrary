const router = require("express").Router();

const booksRepo = require("../../repositories/books");

router.get("/books", async (req, res) => {
  const books = await booksRepo.getAllBooks();
  //console.log(books)
  res.render("books", { books });
});

router.post("/search", async(req, res) => {
  const { searchBooks } = req.body;
  const books = await booksRepo.searchBooks(searchBooks);
  //console.log(books)
  res.render("books", { books });
})

router.get("/genres/:genre", async (req, res) => {
  //console.log(req.params);
  const {
    params: { genre },
  } = req;
  const { id: genreId,name: genreName } = await booksRepo.getGenreByRoute(genre);
  //console.log(genreId)
  const books = await booksRepo.getBooksByGenreId(genreId);
  res.render("books/genre", { books, genreName });
});

router.get("/genres", async (req, res) => {
  const genres = await booksRepo.getGenres();
  res.render("books/genres", { genres });
});

router.get("/books/add", async (req, res) => {
  const genres = await booksRepo.getGenres();
  res.render("books/book_add", { genres });
});

router.post("/insert-books", async (req, res) => {
  //console.log(req.body);
  const { title, genre_id, author, link } = req.body;
  await booksRepo.insertBook(title, genre_id, author, link);
  res.redirect("/");
});

module.exports = router;
