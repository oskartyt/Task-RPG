import React,{Component} from 'react';
import './Character.scss';
import { monsterImage } from "./Monsters";

import Knight_M from '../../img/Characters/Knight_M.gif'


class Character extends Component{
    render() {
        let monster=this.props.currentMonster
        return (
            <div className='h-m-container no-style-flex__no-height'>
                {/*Container with hero data*/}
                <div className='wood-container '>
                    {/*Hero name*/}
                    <h2>Wacław pogromca modliszek</h2>
                    <div className='no-style-flex__start'>
                        {/*Portarait of the hero with background*/}
                        <div className='character-background'>
                            <div className='portrait' style={{backgroundImage:`url(${Knight_M})`}}></div>
                        </div>
                        <div className='stats'>
                            {/*div with porgress bar to next lootbox prize (killed monsters/20)*/}
                            <div

                                style={{width:'250px',
                                    height:'40px',
                                    border:'3px solid silver',
                                    backgroundColor:'blue'}}>
                                <div
                                    style={{width:'30%',
                                        height:'100%',
                                        backgroundColor:'gold'
                                    }}
                                    ></div>
                            </div>
                            <h2>Liczba ubitych potworów</h2>
                            <span>7/20</span>
                            <h2>Zdobyte złoto</h2>
                            <span>37</span>

                        </div>
                    </div>

                </div>
                <div className='wood-container '>
                    <h2>{monster.name}</h2>
                    <div className='no-style-flex__start'>
                        <div className='monster-background'>
                            <div className='portrait' style={{backgroundImage: `url(${monsterImage[monster.image]})`}}></div>
                        </div>
                        <div className='stats'>
                            <div
                                style={{
                                    width:'250px',
                                    height:'40px',
                                    border:'3px solid silver',
                                    backgroundColor:'black'}}
                                className='max-health'>

                                <div
                                    style={{
                                        width:`${monster.takenDamage/monster.healthMax*100}%`,
                                        height:'100%',
                                        backgroundColor:'darkred'
                                    }}
                                    className='health'></div>
                            </div>
                            <h2>Zadane obrażenia</h2>
                            <span>{monster.takenDamage}/{monster.healthMax}</span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Character;