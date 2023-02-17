import { useEffect, useState } from "react";
import BooksContainer from "./components/BooksContainer";
import DetailsPanel from "./components/DetailsPanel/Index";
import Header from "./components/Header";
import { GlobalStyle } from "./styles";
import { Transition } from "react-transition-group";
import Search from "./components/Search";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPanel, setShowPanel] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("https://book-club-json.herokuapp.com/books");
        const json = await res.json();
        setBooks(json);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBooks();
  }, []);

  const pickBook = (book) => {
    setSelectedBook(book);
    setShowPanel(true);
  };

  const closePanel = () => {
    setShowPanel(false);
  };

  const stringSearch = (bookProperty, searchTerm) => {
    return bookProperty
      .toLowerCase()
      .replace(/\.\s+/g, "")
      .includes(searchTerm.toLowerCase());
  };

  const filterBooks = !searchTerm
    ? books
    : books.filter(
        (book) =>
          stringSearch(book.title, searchTerm) ||
          stringSearch(book.author, searchTerm)
      );

  let isFiltered = searchTerm && searchTerm.length > 0;

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Header>
      <BooksContainer
        books={filterBooks}
        isFiltered={isFiltered}
        pickBook={pickBook}
        isPanelOpen={showPanel}
      />

      <Transition in={showPanel} timeout={300}>
        {(state) => (
          <DetailsPanel
            book={selectedBook}
            closePanel={closePanel}
            state={state}
          />
        )}
      </Transition>
    </>
  );
}

export default App;
