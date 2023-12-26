import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
function App() {
  const [books, setBooks] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=search+terms");
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(books);
  return (
    <>
      <h1>My Currently Reading Books</h1>
      <div className='container'>
  {books.map((book, index) => (
    <div key={book.id /* Make sure to use a unique key for each item */} className="book-item">
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="book-image"/>
      <h2>{book.volumeInfo.title}</h2>
    </div>
  ))}
</div>

      </>
  );
}

export default App;

