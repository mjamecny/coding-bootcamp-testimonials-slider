import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root{
  --color-dark-blue: hsl(240, 38%, 20%);
  --color-grayish-blue: hsl(240, 18%, 77%);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body{
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    color: var(--color-dark-blue);
  }

button {
  font: inherit;
  color: inherit;
  cursor: pointer;
}

button:has(svg) {
  line-height: 0;
}

*:disabled {
  cursor: not-allowed;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

`

export default GlobalStyles
