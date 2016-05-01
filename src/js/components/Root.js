import React from "react";
import Title from "./Title";
import Nav from "./Nav";
import ImageCaption from "./ImageCaption";

// const img00 = require("../../assets/00.png");
// const img01 = require("../../assets/01.png");
// const img02 = require("../../assets/02.png");
// const img03 = require("../../assets/03.png");
// const img04 = require("../../assets/04.png");
// const img05 = require("../../assets/05.png");
// const images = [img00, img01, img02, img03, img04, img05];
// const idx = Math.floor(Math.random() * (images.length - 1));
// const image = images[idx];

const navItems = [
  { name: "Paintings", url: "/paintings" },
  { name: "Store", url: "/store" },
  { name: "Contact", url: "/contact" },
  { name: "Blog", url: "/blog" }
];

// const Root = () => {
//   const rootStyle = {
//     backgroundImage: `url(${image})`
//   };
//
//   return (
//     <div className="root" style={ rootStyle }>
//       <Title text="Sam Friedman" />
//       <Nav items={ navItems } />
//     </div>
//   );
// };
//
// export default Root;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      idx: null
    };
  }

  componentWillMount() {
    this.setState({ idx: this.props.idx });
  }

  nextImage() {
    const { idx } = this.state;
    const len = this.props.images.length - 1;
    this.setState({ idx: (idx === len) ? 0 : idx + 1 });
  }

  render() {
    const image = this.props.images[this.state.idx];
    const rootStyle = {
      backgroundImage: `url(${image.url})`
    };
    console.log(image.url);
    return (
      <div className="root" style={ rootStyle }>
        <ImageCaption clickHandler={ () => { this.nextImage(); } } image={ image } />
        <Title clickHandler={ () => { this.nextImage(); } } text="Sam Friedman" />
        <Nav items={ navItems } />
      </div>
    );
  }
}
