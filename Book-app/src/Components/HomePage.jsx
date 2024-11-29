import BookSearch from "./BookSearch";
import Categories from "./Categories";

const HomePage = () => {
  return (
    <div className="home">
      <BookSearch />
      <Categories />
    </div>
  );
};

export default HomePage;
