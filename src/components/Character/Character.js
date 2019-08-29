import React,{Component} from 'react';
import './Character.scss';

class Character extends Component{
    render() {
        return (
            <div>
                <div className='wood-container '>
                    <h2>Wacław pogromca modliszek</h2>
                    <div className='no-style-flex__start'>
                        <div className='character-background'>
                            <div className='character-portrait'></div>
                        </div>
                        <div className='stats'>
                            <span>Punkty ataku:</span>
                            <span>Punkty obrony:</span>
                            <span>Zdrowie: 30</span>
                            <div
                                style={{width:'250px',
                                    height:'20px',
                                    border:'3px solid silver',
                                    backgroundColor:'darkred'}}
                                className='max-health'>

                                <div
                                    style={{width:'30%',
                                        height:'100%',
                                        backgroundColor:'green'
                                    }}
                                    className='health'></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='wood-container '>
                    <h2>Genetycznie modyfikowana modliszka</h2>
                    <div className='no-style-flex__start'>
                        <div className='monster-background'>
                            <div className='monster-portrait'></div>
                        </div>
                        <div className='stats'>
                            <span>Punkty ataku: 1</span>
                            <span>Punkty obrony: 1</span>
                            <span>Zdrowie</span>
                            <div className='max-health'>
                                <div className='health'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Character;