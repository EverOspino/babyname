import React from 'react';

import '../css/Button.css';

export default function Button({ onClick, children }) {
    return ( 
        <>
            <button onClick={onClick} className='searchBtn'>{children}</button>
        </>
     );
}
