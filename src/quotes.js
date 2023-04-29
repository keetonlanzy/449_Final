import React, { useState, useEffect } from "react";

const url = "https://api.quotable.io/random";

const Api = () => {
  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const { content, author } = quotes;
  return (
    <div className="box-centerside ms-5 me-5 mb-3 ps-5 pe-5 pt-2 pb-1 rounded-pill w-50" style={{background: 'lightGrey'}}>
      <div className="text">
        <p>{content}</p>
      </div>
      <div className="author text-end">
        <h5>{author}</h5>
        <div className="button-container text-center rounded-pill">
          <button className="rounded-pill bg-primary-subtle" onClick={getNewQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Api;