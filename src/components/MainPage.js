import React from 'react'
import '../App.css'
import BookList from './BookList'
import { Link } from 'react-router-dom'

class MainPage extends React.Component{
    render(){
      const { books = [], updateBookState } = this.props
      const currentlyReading = books.length > 0 && books.filter(book => book.shelf === "currentlyReading")
      const wantToRead = books.length > 0 && books.filter(book => book.shelf === "wantToRead")
      const Read = books.length > 0 && books.filter(book => book.shelf === "read")
        return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <BookList updateBookState={updateBookState} books={currentlyReading}/>
                </div>

                <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <BookList updateBookState={updateBookState} books={wantToRead}/>
                </div>

                <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <BookList updateBookState={updateBookState} books={Read}/>
                </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link> 
            </div>

        </div>
        )
    }
}

export default MainPage;

