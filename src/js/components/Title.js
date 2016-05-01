import React from "react";

const Title = ({ clickHandler, text }) =>
  <h1 onClick={ clickHandler } className="title"> { text } </h1>;

Title.propTypes = { text: React.PropTypes.string.isRequired };

export default Title;
