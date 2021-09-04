import Reveal from "reveal.js";
import Menu from "reveal.js-menu/menu.esm";
import "reveal.js-pointer/dist/pointer.css";
import Pointer from "reveal.js-pointer/dist/pointer.esm";
import "reveal.js/dist/reveal.css";
import Highlight from "reveal.js/plugin/highlight/highlight.esm";
import Zoom from "reveal.js/plugin/zoom/zoom.esm";
import "./styles/code/atom-one-dark.css";
import "./styles/globals.css";
import "./styles/theme/source/custom.scss";

const deck = new Reveal();
deck.initialize({
  hash: true,
  margin: 0,
  disableLayout: true,
  overview: false,
  hideCursorTime: 500,
  plugins: [Highlight, Zoom, Menu, Pointer],
  transition: "fade",
  menu: {
    path: "node_modules/reveal.js-menu",
  },
});
