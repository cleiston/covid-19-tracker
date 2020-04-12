import React from 'react';
import {Assessment, GitHub} from '@material-ui/icons';

import './styles.css';

export default function Header(){
    return (
        <header>
            <a href="/"> <Assessment /> COVID-19 TRACKER </a><a href="https://github.com/cleiston"><GitHub /></a>
        </header>
    );
}