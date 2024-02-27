import PropTypes from "prop-types";
import axios from "axios";

const Jumbotron = ({ setIsloading, setBooks }) => {
  const src = async (e) => {
    try {
      if (e.key === "Enter") {
        setIsloading(true);
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${e.target.value}`
        );
        setBooks(res.data.items);
        setIsloading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-blue-500">
      <section className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:pt-20 lg:pb-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Book Day is everything
        </h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 ">
          You can search for the book you want
        </p>
        <section className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <input
            type="text"
            className="w-1/2 rounded-sm py-1 px-4 outline-none"
            placeholder="search"
            onKeyDown={src}
          />
        </section>
      </section>
    </section>
  );
};

export default Jumbotron;
Jumbotron.propTypes = {
  setIsloading: PropTypes.func,
  setBooks: PropTypes.func,
};
