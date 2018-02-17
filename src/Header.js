import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <h2>Header....</h2>
            <nav>
                <ul>
                    <li><Link to="/page2">Page 2</Link></li>
                    <li><Link to="/">Page 1</Link></li>
                </ul>
            </nav>
        </div>
    );
}