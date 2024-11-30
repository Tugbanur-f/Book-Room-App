// import { useParams } from "react-router-dom";
// import useFetch from "../Hooks/useFetch";
// import { API_KEY } from "../config";

// const MagazineDetails = () => {
//   const { id } = useParams();
//   const {
//     data: magazine,
//     loading,
//     error,
//   } = useFetch(
//     `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`,
//   );

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!magazine) return <p>Magazine not found.</p>;

//   const {
//     volumeInfo: { title, imageLinks, description, pageCount, price },
//   } = magazine;

//   return (
//     <div className="magazine-details">
//       <h2>{title}</h2>
//       {imageLinks?.thumbnail && (
//         <img
//           src={imageLinks.thumbnail}
//           alt={title}
//           style={{ width: "400px" }}
//         />
//       )}
//       <p>{description || "No description available"}</p>
//       <p>Page Count: {pageCount}</p>
//       <p>Price ${price}</p>
//     </div>
//   );
// };
// export default MagazineDetails;
