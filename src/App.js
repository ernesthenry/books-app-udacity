import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchList from './components/SearchList'
import MainPage from './components/MainPage'

class BooksApp extends Component {
  state={
    BookList: []
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((BookList) => {
      this.setState((BookList) => ({
        BookList
      }))      
    }) 
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book,shelf)
    .then((books)  =>{
       const newBooks = this.state.books.map((b) => {
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
         const newBook = this.state.books.filter((b) => b.id !== book.id);
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
          <Route exact path='/' render = {
            () => (
              <MainPage  updateBookState={this.updateBook} books={this.state.BookList}/>
            )
          }
          />
     
          <Route 
          path ="/search" render = {
            () => (
              <SearchList  updateBookState={this.addBook} books={this.state.BookList}/>
            )
          }
          />
        </div> 
      </div>
    )
  }
}


export default BooksApp

