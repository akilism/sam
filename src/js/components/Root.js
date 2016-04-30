import React from "react";
import Title from "./Title";
import Nav from "./Nav";

import img00 from "../../assets/00.png";

const navItems = [
  { name: "Paintings", url: "/paintings" },
  { name: "Store", url: "/store" },
  { name: "Contact", url: "/contact" },
  { name: "Blog", url: "/blog" }
];

const Root = () =>
  <div>
    <Title text="Sam Friedman" />
    <Nav items={ navItems } />
    <img src={ img00 } alt="splash" />
  </div>;

export default Root;

// export default class extends React.Component {
//   render() {
//     return <h1>Hello World</h1>;
//   }
// }
