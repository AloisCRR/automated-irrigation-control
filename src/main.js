import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import Highlight from "reveal.js/plugin/highlight/highlight";
import Zoom from "reveal.js/plugin/zoom/zoom";
import "./styles/code/atom-one-dark.css";
import "./styles/globals.css";
import "./styles/theme/source/custom.scss";

const deck = new Reveal();
deck.initialize({
  hash: true,
  margin: 0,
  disableLayout: true,
  hideCursorTime: 500,
  plugins: [Highlight, Zoom],
});
