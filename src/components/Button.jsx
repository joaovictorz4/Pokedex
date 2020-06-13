import React from 'react'
import './button.css'

export default props => 
    <div className="button-body">
        <button className="button">{props.children}</button>
    </div>