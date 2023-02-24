import React from 'react';

import '../css/Input.css';

export default function Input({ onChange }) {
    return ( 
        <>
            <div className='inputBox'>
              <input onChange={onChange} className='inputLetter' type='text' maxLength='1' placeholder=' '/>
              <span className='placeholder'>Inicial del nombre</span>
            </div>
        </>
     );
}

