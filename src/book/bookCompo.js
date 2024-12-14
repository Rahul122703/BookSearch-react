import React from "react";
const Book = (props) => {
  const { author_name, cover_i, title } = props;
  return (
    <div className="card">
      <div className="bookImage_container">
        <img
          src={
            cover_i
              ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
              : `https://akeia.in/wp-content/uploads/2021/09/noimg.jpg`
          }
          className="bookImage"
        />
      </div>

      <div className="card__content">
        <p className="card__title">{title}</p>
        {
          <p className="card__description">
            Author: {author_name ? author_name[0] : "No Name Avalible"}
          </p>
        }
      </div>
    </div>
  );
};

const BookList = ({ book_data }) => {
  return (
    <div className="book_list">
      {book_data.map((current_data) => {
        return <Book key={current_data.id} {...current_data} />;
      })}
    </div>
  );
};

export default BookList;
