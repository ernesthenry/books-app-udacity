import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchList from './components/SearchList'
import MainPage from './components/MainPage'

class BooksApp extends Component {
  state={
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState((books) => ({
        books
      }))  
      console.log(books)    
    }) 
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book,shelf)
    .then((books)  =>{
       let newBooks = this.state.books.map((b) => {
         if(book.id === b.id){
           book.shelf = shelf
           return book;
         } else{
              return b
         }
      });
      this.setState(() =>({
        books: newBooks
      }))
    })
  }

  addBook = (book,shelf) =>{
    BooksAPI.update(book,shelf)
    .then(books =>{
      BooksAPI.get(book.id)
      .then(book => {
         let newBook = this.state.books.filter((b) => b.id !== book.id);
         this.setState(() => ({
           books: [...newBook, book]
         }))
      })
    })
    }


  render() {
    return (
      <div className="app">
        <div >
          <Route exact path='/' render={
            () => (
              <MainPage  updateBookState={this.updateBook} books={this.state.books}/>
            )
          }
          />
     
          <Route 
          path="/search" render={
            () => (
              <SearchList  updateBookState={this.addBook}  searchBooks={this.searchBooks} books={this.state.books}/>
            )
          }
          />
        </div> 
      </div>
    )
  }
}


export default BooksApp

