import { Author, Container, Cover, Title } from "./styles";

function BookComponent({ book, pickBook, insidePanel }) {
  return (
    <Container onClick={() => pickBook(book)} $insidePanel={insidePanel}>
      <Cover
        alt={`Book cover for ${book.title} by ${book.author}`}
        src={book.image}
      />
      <figcaption>
        <Title $insidePanel={insidePanel}>{book.title}</Title>
        <Author>by {book.author}</Author>
      </figcaption>
    </Container>
  );
}

export default BookComponent;
