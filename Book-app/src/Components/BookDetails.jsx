import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { API_KEY } from "../config";

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

  const { title, authors, imageLinks, description, pageCount } =
    BookDetails.volumeInfo;

  const price = BookDetails.saleInfo?.retailPrice?.amount || "N/A";

  return (
    <div className="book-details">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h2>{title}</h2>
      {imageLinks?.thumbnail && (
        <img
          src={imageLinks.thumbnail}
          alt={title}
          style={{ width: "300px" }}
        />
      )}
      <h3>Author: {authors?.join(", ") || "Unknown"}</h3>
      <p>{description || "No description available."}</p>
      <p>Page Count: {pageCount || "Not available"}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default BookDetails;
