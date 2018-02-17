import React from 'react';
import { Route, Link } from 'react-router-dom';

import HomePage2Detail from './HomePage2Detail';

export default (props) => {
    return (
        <div>
            <h3>Hello from page2! { props.greeting }</h3>

            <Link to={`${props.match.url}/details-page2`}>Detail</Link>

            <Route path={`${props.match.url}/:id`} component={HomePage2Detail} />
            <Route 
                exact 
                path={props.match.url} 
                render={() => (
                    <h3>Click in Detail for more info</h3>
                )} 
            />
        </div>
    )
}