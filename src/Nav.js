import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location: { pathname } }) => {
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Products',
            path: '/products'
        },
        {
            title: 'Sale',
            path: '/sale'
        },
        {
            title: 'Create Product',
            path: '/create'
        }
    ];

    return (
        <ul className='nav nav-pills'>
            {
                links.map(link => (
                    <li key={link.path} className='nav-item'>
                        <Link to={link.path} className={`nav-link${link.path === pathname ? ' active' : ''}`}>
                            {link.title}
                        </Link>
                    </li>
                ))

            }
        </ul>
    );
};

export default Nav;