import { useRef, useEffect } from "react";
import Book from "../Book";
import { BG, Close, Em, P, Panel, RoundBtnWrapper } from "./styles";

function DetailsPanel({ book, closePanel, state }) {
  const panelElement = useRef(null);
  const prevBook = useRef(null);

  useEffect(() => {
    if (prevBook.current !== book) {
      panelElement.current.scrollTop = 0;
    }

    prevBook.current = book;
  }, [book, prevBook]);

  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelElement}>
        <RoundBtnWrapper onClick={closePanel} $state={state}>
          <Close />
        </RoundBtnWrapper>

        {book && (
          <>
            <Book book={book} insidePanel={true} />
            <P>{book.description}</P>
            <P>
              <Em>Published in {book.published}</Em>
            </P>
          </>
        )}
      </Panel>
    </>
  );
}

export default DetailsPanel;
