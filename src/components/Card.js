import React from 'react';

import '../css/Card.css';

export default function Card({id, classes, children}) {
    return ( 
        <>
            <div id={id} className={classes}>
                { children }
            </div>
        </>
     );
}
