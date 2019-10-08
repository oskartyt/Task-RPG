import React,{Component} from 'react';
import './Header.scss';
import {Link, NavLink} from "react-router-dom";

class Header extends Component{
    render() {
        return (
            <header className='wood-container'>
                <div className='logo'>
                    Pixel Task RPG
                </div>
                <nav>
                    <ul>
                        {/*Doddać klase aktywności activeClassName={}*/}
                        <li><NavLink  to="/">Zadania</NavLink></li>
                        <li><NavLink to="/character">Postać</NavLink></li>
                        <li><NavLink to="/xyz">Kraina 404</NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Header