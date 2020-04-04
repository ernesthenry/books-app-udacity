import React, { Component } from 'react'
import '../App.css'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookList from './BookList'


class SearchList extends Component {
  state = {
    books : []
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
    .then((books) => {
      if (books){
        for(let index = 0; index < books.length; index++){
          this.props.books.map(book => {
            if(books[index].id === book.id){
              books[index].shelf = book.shelf;
            }
            return books[index]
          })
        }
      }
      this.setState({
        books: books
      })
    })

  }
    
  render() {
    const { updateBookState } = this.props
 
    return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to = '/'>Close</Link>
          <div className="search-books-input-wrapper">
              <input 
              type="text" 
              placeholder="Search by title or author"
              onChange={(event) => this.searchBooks(event.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
         <BookList updateBookState={updateBookState} books={this.state.books}/>
        </div>
      </div>
    )
  }
}



export default SearchList;
