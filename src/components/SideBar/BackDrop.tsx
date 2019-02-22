import React from 'react';

//should also be fine as is?

const backdrop = props => (
    <div className="backdrop" onClick={props.click}/>
);

export default backdrop;