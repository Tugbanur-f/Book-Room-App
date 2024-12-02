import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { API_KEY } from "../../config";
import { getBookDetails } from "../../Helpers/Helpers";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: BookDetails,
    loading,
    error,
  } = useFetch(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`,
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!BookDetails || !BookDetails.volumeInfo) return null;

  const { title, price, authors, image, description, pageCount } =
    getBookDetails(BookDetails);

  return (
    <div className="book-details">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h2>{title}</h2>
      {image && <img src={image} alt={title} style={{ width: "300px" }} />}
      <h3>Author: {authors}</h3>
      <p>{description}</p>
      <p>Page Count: {pageCount}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default BookDetails;
