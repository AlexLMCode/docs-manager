import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

import {PublicRoute} from "./PublicRoute";
import {PrivateRoute} from "./PrivateRoute";
import {MainPage} from "../pages/MainPage";
import {AuthRouter} from "./AuthRouter";
import CajonPage from "../pages/CajonPage";
import ArchiveroPage from "../pages/ArchiveroPage";
import ExpedientePage from "../pages/ExpedientePage";

const AppRouter = () => {

    // const [checking, setChecking] = useState(true);
    const [isLogged, setLogged] = useState(true);

    return (
        <Router>
            <>
                <Switch>
                    <PublicRoute
                        isAuthenticated={isLogged}
                        path="/auth"
                        component={AuthRouter}
                    />

                    <PrivateRoute
                        isAuthenticated={isLogged}
                        exact
                        path="/"
                        component={MainPage}
                    />

                    <PrivateRoute
                        isAuthenticated={isLogged}
                        exact
                        path="/cajones"
                        component={CajonPage}
                    />

                    <PrivateRoute
                        isAuthenticated={isLogged}
                        exact
                        path="/archiveros"
                        component={ArchiveroPage}
                    />

                    <PrivateRoute
                        isAuthenticated={isLogged}
                        exact
                        path="/expedientes"
                        component={ExpedientePage}
                    />

                    <Redirect to="/auth/login"/>


                </Switch>
            </>
        </Router>
    );
};

export default AppRouter;