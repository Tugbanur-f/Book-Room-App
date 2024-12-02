import BookSearch from "../../Components/Shared/BookSearch";
import Categories from "../../Components/Categories/CategoriesButton";

const HomePage = () => {
  return (
    <div className="home">
      <h1>BOOK ROOM</h1>
      <BookSearch />
      <Categories />
    </div>
  );
};

export default HomePage;
