import React,{Component} from 'react';
import { connect } from "react-redux";
import {Link, NavLink} from "react-router-dom";
import './Header.scss';

import {logOutAction} from '../../actions'

const mapDispatchToProps=(dispatch)=>{
    return{
        logOut: ()=>dispatch(logOutAction())
    }
}

class ConnectedHeader extends Component{
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
                        <li><NavLink to="/test">TestRdx</NavLink></li>
                        <li><NavLink to="/xyz">Kraina 404</NavLink></li>
                        <li><button onClick={this.props.logOut}>Wyloguj</button></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

const Header=connect(null,mapDispatchToProps)(ConnectedHeader);
export default Header