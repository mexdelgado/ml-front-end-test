// Dependencies
import React from 'react';
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom';

// Routes
import routes from '../shared/routes';

//Assets
import logo from '../../public/assets/images/Logo_ML@2x.png';
import icoSearch from '../../public/assets/images/ic_Search@2x.png';

export default ({ server, location, context }) => {
  const routesMap = routes.map((route, i) => <Route key={i} {...route} />);

  // Client Router
  let router = (
    <BrowserRouter>
      <Switch>
        {routesMap}
      </Switch>
    </BrowserRouter>
  );

  // Server Router
  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        <Switch>
          {routesMap}
        </Switch>
      </StaticRouter>
    );
  }

  return (
    <div className="wrapper">

      <nav className="navbar navbar-default Header">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="javacript:void(0);">
              <img src={logo} alt="logo" />
            </a>
            <form  className="fr-search" name="fr-search" id="fr-search">
              <div className="form-group">
                <div className="input-group">
                  <input type="text"  name="search" id="fr_search" className="form-control" placeholder="Nunca dejes de buscar" />
                    <span className="input-group-btn">
                    <button className="btn btn-search" type="submit">
                      <img src={icoSearch} alt="search" className="btnSearch" />
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <div className="main-content">
        <div className="container">
          {router}
        </div>
      </div>
    </div>
  );
};
