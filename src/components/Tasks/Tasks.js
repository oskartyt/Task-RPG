import React,{Component} from 'react';
import './Tasks.scss';

class Tasks extends Component{
    render() {
        return (
            <div className='no-style-flex'>
                <div className='wood-container daily-tasks'>
                    <span>Zadania Codzienne</span>
                    <form>
                        {/*<input type="text" value="" placeholder='Nazwa zadania'/>*/}
                        {/*<input type="submit" value="Zatwierdź"/>*/}
                    </form>
                    <ul>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>

                </div>
                <div className='wood-container special-tasks'>
                    <span>Zadania Specjalne</span>
                    <form>
                        {/*<input type="text" value="" placeholder='Nazwa zadania'/>*/}
                        {/*<input type="submit" value="Zatwierdź"/>*/}
                    </form>
                    <ul>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>

                </div>
                <div className='wood-container unsubmitted-tasks'>
                    <span>Zadania Zaległe</span>
                    <form>
                        {/*<input type="text" value="" placeholder='Nazwa zadania'/>*/}
                        {/*<input type="submit" value="Zatwierdź"/>*/}
                    </form>
                    <ul>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>

                </div>
            </div>

            );
    }
}

export default Tasks;