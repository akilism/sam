import React from "react";

const ImageCaption = ({ clickHandler, image }) =>
  <div onClick={ clickHandler } className="image-caption">
    <h2 className="image-caption__title">{ image.title }</h2>
    <p className="image-caption__medium">{ image.medium }</p>
    <p className="image-caption__date">{ image.date }</p>
  </div>;

const imagePropType = React.PropTypes.shape({
  title: React.PropTypes.string,
  url: React.PropTypes.string,
  date: React.PropTypes.string,
  medium: React.PropTypes.string
});

ImageCaption.propTypes = { image: imagePropType };

export default ImageCaption;
