import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
require("normalize.css");
require("../styles/main.scss");

// For hot reloading.
if (module.hot) { module.hot.accept(); }

const img00 = require("../assets/00.png");
const img01 = require("../assets/01.png");
const img02 = require("../assets/02.png");
const img03 = require("../assets/03.png");
const img04 = require("../assets/04.png");
const img05 = require("../assets/05.png");

const images = [
  { title: "Some Title 0",
    date: "Jan 2000",
    medium: "Oil on Canvas",
    url: img00
  },
  { title: "Some Title 1",
    date: "Jan 2000",
    medium: "Oil on Canvas",
    url: img01
  },
  { title: "Some Title 2",
    date: "Jan 2000",
    medium: "Oil on Canvas",
    url: img02
  },
  { title: "Some Title 3",
    date: "Jan 2000",
    medium: "Oil on Canvas",
    url: img03
  },
  { title: "Some Title 4",
    date: "Jan 2000",
    medium: "Oil on Canvas",
    url: img04
  },
  { title: "Some Title 5",
    date: "Jan 2000",
    medium: "Oil on Canvas",
    url: img05
  }
];

// start with a random image.
const idx = Math.floor(Math.random() * (images.length - 1));

ReactDOM.render(<Root images={ images } idx={ idx } />, document.getElementById("app"));
