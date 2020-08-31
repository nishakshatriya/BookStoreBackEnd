module.exports = app => {
  const BOOK_CONTROLLER = require("../controller/book.controller");
 
  app.post("/Books", BOOK_CONTROLLER.create);
  app.get("/getBooks", BOOK_CONTROLLER.getAllBooks);  
  app.get('/searchBook',BOOK_CONTROLLER.searchBook)
  app.get('/sortBooksLowToHigh',BOOK_CONTROLLER.sortAllBooksByDecPrice)
  app.get('/sortBooksHighToLow',BOOK_CONTROLLER.sortAllBooksByAscPrice)
  app.get('/sortBooksByArrival',BOOK_CONTROLLER.sortAllBooksByNewArrival)
};
