import React, { useState, useEffect } from "react";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const date = new Date().toLocaleDateString();
  //   const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  //   const today = new Date().toLocaleDateString(undefined, options);
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }, []);

  function handleNewQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-lg p-8 bg-slate-900/80  rounded-lg sm:w-[300px] md:w-[500px] shadow-xl shadow-black">
        <p className="text-white font-bold text-2xl pb-6  text-end">{date}</p>
        <p className="text-4xl font-bold text-white text-start ">{quote}</p>
        <p className="mt-4 text-lg font-medium text-white text-end">
          <span className=" font-bold text-2xl"> - </span> {author}
        </p>
        <button
          className="mt-8 px-4 py-2 sm:text-md font-bold
           bg-gray-800 text-white rounded
            hover:bg-gray-700 focus:outline-none
             focus:ring-2 focus:ring-gray-400 md:w-[400px] sm:w-[100px] sm:text-sm md:text-2xl ml-4"
          onClick={handleNewQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteGenerator;
