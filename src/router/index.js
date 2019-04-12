import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import Detail from '../pages/detail';
import Home from '../pages/home';
import Reg from '../pages/reg';


const routes = [
    {
        path: '/Detail',
        component: Detail,
        exact: true,
        id: '1',
    },
    {
        path: '/Home',
        component: Home,
        exact: true,
        id: '2',
    },
    {
        path: '/Reg',
        component: Reg,
        exact: true,
        id: '3',
    },

]


class RoutesComponent extends React.Component {

    render() {

        console.info('router page');

        return (
            <Router>
                <Switch>
                    {
                        routes.map((item, index) => {
                            return (
                                <Route key={index} path={item.path} exact={item.exact} component={item.component} />
                            )
                        })
                    }
                    <Route path="/" exact={true} render={() => <Redirect to="/Reg" />} />
                </Switch>
            </Router>
        )
    }
}

export default RoutesComponent;