import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "App"
import PokemonDetails from "components/PokemonDetails"
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:name" component={PokemonDetails} />
      </Switch>
    </Router>
  )
}

export default Routes
