import BookSearch from "./BookSearch";
// import Categories from "./Categories";

const HomePage = () => {
  return (
    <div className="home">
      <h1>BOOK ROOM</h1>
      <BookSearch />
      {/* <Categories /> */}
    </div>
  );
};

export default HomePage;
