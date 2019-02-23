import React from 'react';
import './styles.css';

const header = (props) => (
    <header className="view-header">
        <h1>{props.title}</h1>
    </header>
)
export default header;