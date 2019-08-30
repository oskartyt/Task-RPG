import React,{Component} from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

class Sidebar extends Component{
    render() {
        return (
            <div className='sidebar wood-container '>
                <ul>
                    <li><Link to="/">Zadania</Link></li>
                    <li><Link to="/character">Postać</Link></li>
                    <li><Link to="/xyz">Kraina 404</Link></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar

