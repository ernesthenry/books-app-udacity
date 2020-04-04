import React, { Component } from 'react'

class Book extends Component {
  render() {
    const {
      book,
      updateBookState,
      currentReadingStyle,
      wantToReadStyle,
      readStyle,
      noneStyle
    }
    = this.props
    return (
      <>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})`}}></div>
              <div className="book-shelf-changer">
                <select onChange={(event) => updateBookState(event.target.value, book)}>
                  <option className="moveTo" disabled>Move to...</option>
                  <option className={currentReadingStyle}>Currently Reading</option>
                  <option className={wantToReadStyle}>Want to Read</option>
                  <option className={readStyle}>Read</option>
                  <option className={noneStyle}>None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.author}</div>
          </div>
      </>
    )
  }
}

export default Book
