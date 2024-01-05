import booksData from "../../../shared/dummy_data/dummyBooks.json";

class BookDataHandler {
  getAll() {
    // return http.get("/books");
    // ../dummy_data/books.jsonからnameとauthorを取得してreturnする
    return booksData.map((book) => ({ name: book.name, author: book.author }));
  }

  get(id) {
    // return http.get(`/books/${id}`);
    return booksData.find((book) => book.id === id);
  }

  create(name) {
    // return http.post("/books", data);
    return booksData.push({ name: name });
  }

  update(id, name) {
    // return http.put(`/books/${id}`, data);
    return booksData.map((book) => {
      if (book.id === id) {
        book.name = name;
      }
    });
  }

  delete(id) {
    // return http.delete(`/books/${id}`);
    return booksData.filter((book) => book.id !== id);
  }

  deleteAll() {
    // return http.delete(`/books`);
    return booksData.splice(0, booksData.length);
  }

  findByTitle(name) {
    // return http.get(`/books?title=${title}`);
    return booksData.filter((book) => book.name === name);
  }
}

export default new BookDataHandler();
