import { BookList, Container, H2 } from "./styles";
import Book from "../Book";

function BooksContainer({ books, pickBook, isPanelOpen, isFiltered }) {
  return (
    <Container $isPanelOpen={isPanelOpen}>
      <H2>{isFiltered ? "Search results:" : "All books"}</H2>
      <BookList>
        {books.map((book) => {
          return <Book key={book.id} book={book} pickBook={pickBook} />;
        })}
      </BookList>
    </Container>
  );
}

export default BooksContainer;
