import React from "react";


const blockquoteStyle = {
  position: "relative",
  font: "italic Times, serif",
  padding: "50px",
  margin: "0px",
  backgroundPosition: "top left",
  backgroundRepeat: "no-repeat",
  textIndent: "23px",
}

const openQuoteStyle = {
  position: "absolute",
  top: "-50px",
  fontFamily: "cursive",
  fontSize: "300%",
}
const closeQuoteStyle = {
  fontFamily: "cursive",
  fontSize: "200%",
  position: "absolute",
  bottom: "-50px",
}
const authorStyle = {
  borderBottom: "1px solid #e1cc89",
}

export default function BlockQuote({ text, author=null }) {
  return <>
    <div style={blockquoteStyle}>
      <span style={openQuoteStyle}>"&nbsp;</span>
      {text}
      <span style={closeQuoteStyle}>&nbsp;"</span>
    </div>
    <p style={authorStyle}>{author}</p>
  </>
}
