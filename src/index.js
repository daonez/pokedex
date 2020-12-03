import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import GlobalStyle from "styles"
import Routes from "Routes"
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
)
