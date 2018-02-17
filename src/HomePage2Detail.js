import React from 'react';

export default ({match}) => {
    return (
        <h3>Hello from page2 detail! { match.params.id }</h3>
    )
}