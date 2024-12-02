export const getBookDetails = (book) => {
  const title = book?.volumeInfo?.title || "Title not available";
  const price = book?.saleInfo?.retailPrice?.amount || "Price not available";
  const authors =
    book?.volumeInfo?.authors?.join(", ") || "Author(s) not available";
  const image = book?.volumeInfo?.imageLinks?.thumbnail || "No image available";
  const description =
    book?.volumeInfo?.description || "No description available";
  const pageCount = book?.volumeInfo?.pageCount || "Page count not available";

  return {
    title,
    price,
    authors,
    image,
    description,
    pageCount,
  };
};

export const getInitialFavourites = () => {
  const savedFavourites = localStorage.getItem("favourites");
  return savedFavourites ? JSON.parse(savedFavourites) : [];
};

export const calculateTotalPrice = (cart) => {
  return cart
    .reduce((sum, book) => {
      const price = book.saleInfo?.retailPrice?.amount || 0;
      return sum + price;
    }, 0)
    .toFixed(2);
};
