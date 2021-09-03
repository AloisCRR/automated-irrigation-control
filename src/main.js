import "highlight.js/styles/atom-one-dark.css";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/moon.css";
import Highlight from "reveal.js/plugin/highlight/highlight";
import Markdown from "reveal.js/plugin/markdown/markdown";
import Zoom from "reveal.js/plugin/zoom/zoom";
import "./styles/globals.css";

const deck = new Reveal();
deck.initialize({
  hash: true,
  margin: 0,
  plugins: [Markdown, Highlight, Zoom],
});
