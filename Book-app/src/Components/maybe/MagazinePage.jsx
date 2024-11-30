// import useFetch from "../Hooks/useFetch";
// import { API_KEY } from "../config";
// import { Link } from "react-router-dom";

// const MagazinePage = () => {
//   const {
//     data: magazines,
//     loading,
//     error,
//   } = useFetch(
//     `https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=${API_KEY}`,
//   );

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!magazines || !magazines.items || magazines.items.length === 0) {
//     return <p>No magazines found.</p>;
//   }

//   return (
//     <div className="magazine-page">
//       {magazines.items.map((magazine) => {
//         const {
//           id,
//           volumeInfo: { title, imageLinks },
//         } = magazine;

//         return (
//           <div key={id} className="magazine-item">
//             <h2>{title}</h2>
//             {imageLinks?.thumbnail && (
//               <img
//                 src={imageLinks.thumbnail}
//                 alt={title}
//                 style={{ width: "300px" }}
//               />
//             )}
//             <Link to={`/details/${id}`} className="view-details-btn">
//               View Details
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MagazinePage;
