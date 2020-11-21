import React from "react";
export default function View(props) {
  return (
    <>
      <h1 data-testid="title">{props.title}</h1>
      <p data-testid="text">{props.text}</p>
      <button
        data-testid="button-restart"
        disabled={props.cur === 0}
        onClick={() => props.handleRestart}
      >
        restart
      </button>
      <button
        data-testid="button-prev"
        disabled={props.cur === 0}
        onClick={() => props.onClickPrev}
      >
        prev
      </button>
      <button
        data-testid="button-next"
        disabled={props.cur === props.slides.length - 1}
        onClick={() => props.onClickNext}
      >
        next
      </button>
    </>
  );
}
