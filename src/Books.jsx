import { useEffect, useState } from "react";
import Book from "./Components/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1 className=" text-2xl lg:text-4xl font-semibold lg:font-bold text-[#131313] text-center my-9 ">
        Books
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
