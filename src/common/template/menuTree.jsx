import React from 'react'

export default props => (
    //submenu
    <li className='treeview'>
        <a href>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
            <i className='fa fa-angle-left pull-right'></i>
        </a>
        <ul className='treeview-menu'>
            {/* filhos desse menu */}
            {props.children}
        </ul>
    </li>
)