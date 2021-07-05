import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {MainNav} from "../components/MainNav";
import FooterComponent from "../components/FooterComponent";

export const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => {


    return (
        <>
            <MainNav/>
            <Route {...rest}

                   component={(props) => (
                       (isAuthenticated)
                           ? (<Component {...props} />)
                           : (<Redirect to={"/auth/login"}/>)
                   )}

            />
            <FooterComponent/>
        </>
    )

}
