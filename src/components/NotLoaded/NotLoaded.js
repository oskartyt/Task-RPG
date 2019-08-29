import React,{Component} from 'react';
import './NotLoaded.scss';

class NotLoaded extends Component{
    render() {
        return (
            <div className='wood-container not-loaded'>
                <h1>Jeszcze chwila. Nasi czarodzieje biegną po dane do serwera</h1>
                <div className='running-wizard-f'></div>
                <div className='running-wizard-m'></div>
                <div className='running-wizard-f'></div>
                <div className='running-wizard-m'></div>
            </div>
        );
    }
}

export default NotLoaded;