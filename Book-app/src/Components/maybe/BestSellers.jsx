// import useFetch from "../Hooks/useFetch";
// import { API_KEY } from "../config";
// import { Link } from "react-router-dom";
// import AddToCart from "./AddToCart";
// const BestsellerBooks = () => {
//   const {
//     data: bestsellerBooks,
//     loading,
//     error,
//   } = useFetch(
//     `https://www.googleapis.com/books/v1/volumes?q=popular&langRestrict=en&key=${API_KEY}`,
//   );

//   return (
//     <div className="bestseller">
//       {loading && <p>Loading bestseller books...</p>}
//       {error && <p>Error: {error}</p>}
//       <div className="book-list">
//         {bestsellerBooks &&
//           bestsellerBooks.items &&
//           bestsellerBooks.items.map((book) => (
//             <div key={book.id} className="book-card">
//               <Link to={`/book/${book.id}`} className="book-link">
//                 <h3>{book.volumeInfo.title}</h3>
//                 <img
//                   src={book.volumeInfo.imageLinks?.thumbnail}
//                   alt={book.volumeInfo.title}
//                   className="book-image"
//                 />
//               </Link>

//               <AddToCart book={book} />
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default BestsellerBooks;
