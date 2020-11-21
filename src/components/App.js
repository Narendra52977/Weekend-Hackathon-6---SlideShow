import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [cur, setCur] = React.useState(0);

  const handleNext = () => {
    setCur(cur + 1);
  };
  const handlePrev = () => {
    setCur(cur - 1);
  };
  const handleRestart = () => {
    setCur(0);
  };
  return (
    <>
      <h1 data-testid="title">{props.slides[cur].title}</h1>
      <p data-testid="text">{props.slides[cur].text}</p>
      <button
        data-testid="button-restart"
        disabled={cur === 0}
        onClick={handleRestart}
      >
        Restart
      </button>
      <button
        data-testid="button-prev"
        disabled={cur === 0}
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        disabled={cur === props.slides.length - 1}
        onClick={handleNext}
      >
        Next
      </button>
    </>
  );
};

export default App;
