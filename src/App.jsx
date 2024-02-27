import { useState, useEffect } from "react";
import Jumbotron from "./components/Jumbotron";
import axios from "axios";
import CardLoading from "./components/CardLoading";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(function () {
    const alfa = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "k",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const random = alfa[Math.floor(Math.random() * alfa.length)];

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${random}`)
      .then((res) => {
        setBooks((prev) => [...prev, ...res.data.items]);
        setIsloading(false);
      });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Jumbotron setIsloading={setIsloading} setBooks={setBooks} />

        <section className="p-20 flex flex-wrap justify-between gap-10">
          {isLoading ? <CardLoading count={12} /> : ""}
          {books.map((v, i) => (
            <a href={v.volumeInfo.previewLink} key={i} target="_blank">
              <section className="w-40 flex flex-col justify-center">
                <img src={v.volumeInfo.imageLinks.thumbnail} alt="" />
                <p className="text-[12px] font-semibold">
                  {v.volumeInfo.title}
                </p>
                <p className="text-[11px]">{v.volumeInfo.authors}</p>
                <p className="text-[11px]">{v.volumeInfo.publishedDate}</p>
                <p className="text-[11px]">{v.volumeInfo.pageCount} hal</p>
              </section>
            </a>
          ))}
        </section>
      </HelmetProvider>
    </>
  );
}

export default App;
