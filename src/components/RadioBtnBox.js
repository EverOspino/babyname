import React from 'react';

import '../css/RadioBtnBox.css';

export default function RadioBtnBox({onChange}) {
    return ( 
        <>
            <div onChange={onChange}>
              <input  type='radio' name='gen' id='boy' value='boy' />
              <label htmlFor='boy' >
                <span>Niño</span>
              </label>
              <input type='radio' name='gen' id='girl' value='girl' />
              <label htmlFor='girl' >
                <span>Niña</span>
              </label>
            </div>
        </>
     );
}
