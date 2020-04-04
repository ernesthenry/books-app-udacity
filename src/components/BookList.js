import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {
  render() {
    const { books = [], updateBookState } = this.props
    const listOfBooks = books.length>0 && books.map(book => {

      if(book.shelf === 'currentlyReading'){
        return <li key={book.id}>
          <Book  currentReadingStyle='selected' updateBookState={updateBookState} book={book}/>

        </li>
      }
      if(book.shelf === 'wantToRead'){
        return <li key={book.id}>
              <Book wantToReadStyle='selected'  updateBookState={updateBookState} book={book}/>         
        </li>
      }

      if(book.shelf === 'read'){
        return <li>
              <Book readStyle='selected'  key={book.id} updateBookState={updateBookState} book={book}/>
          
        </li>
      }
      else{
        return <li key={book.id}>
           <Book noneStyle='selected' updateBookState={updateBookState} book={book}/>
        </li>
      }
     
    })
    return(
      <div className="bookshelf">
        <div className="bookshelf-books">
          <ol className="books-grid">
            {listOfBooks}
          </ol>
        </div>
      </div>

    )
  }
}

export default BookList;
