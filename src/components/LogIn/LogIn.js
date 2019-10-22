import React, {Component} from 'react';
import { connect } from "react-redux"
import './LogIn.scss';

import {logInAction} from "../../actions";

const mapDispatchToProps=(dispatch)=>{
    return{
        logIn: ()=>dispatch(logInAction())
    }
};

class ConnectedLogIn extends Component{
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.logIn()
    };
    render() {
        return (
            <div className='log-in no-style-flex__center'>
                <div className='wood-container'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Zaloguj się</label>
                        <input type="submit" value={'Kliknij tutaj'}/>
                    </form>
                </div>
            </div>

        );
    }
}

const LogIn=connect(null,mapDispatchToProps)(ConnectedLogIn);
export default LogIn;
