import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import HomePage2 from './HomePage2';

export default (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" render={(props) => ( <HomePage {...props} greeting="dsdd" />)} />
                <Route path="/page2" render={(props) => ( <HomePage2 {...props} greeting="dsdsddsdsdsd" />)} />                    
            </Switch>
        </div>
    )
}