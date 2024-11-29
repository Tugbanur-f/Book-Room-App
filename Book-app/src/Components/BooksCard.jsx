import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { id, volumeInfo } = book;
  return (
    <div className="book-card">
      <h3>
        <Link to={`/details/${id}`}>{volumeInfo.title}</Link>
      </h3>
      <img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title} />
    </div>
  );
};

export default BookCard;
