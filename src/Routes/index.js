import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "App"
import DetailPage from "components/DetailPage"
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:name" component={DetailPage} />
      </Switch>
    </Router>
  )
}

export default Routes
