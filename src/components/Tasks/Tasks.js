import React,{Component} from 'react';
import './Tasks.scss';

class Tasks extends Component{
    state={
        newDailyTask:"",
        typeOfNewDailyTask:1,
        // dailyTasks:this.props.tasks.daily,
        // uncompletedDailyTasks:this.props.tasks.uncompletedDaily,
        // specialTasks:this.props.tasks.special
    };
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    handleDailySubmit=e=>{
        e.preventDefault();
        this.props.addDailyTask(this.state.newDailyTask,parseInt(this.state.typeOfNewDailyTask))
    };
    render() {
        return (
            <div className='no-style-flex'>
                <div className='wood-container daily-tasks'>
                    <span>Zadania Codzienne</span>
                    <form onSubmit={this.handleDailySubmit}>
                        <input className='name' type="text" value={this.state.newDailyTask}
                               name='newDailyTask' placeholder='Nazwa zadania' onChange={this.handleChange}/>
                        <span>Typ zadania</span>
                        <select
                            name='typeOfNewDailyTask'
                            value={this.state.typeOfNewDailyTask}
                            onChange={this.handleChange}>

                            <option value={1} style={{color:'green'}}>Zbieranie marchewek (1)</option>
                            <option value={2} style={{color:'blue'}}>Polowanie na króliki (2)</option>
                            <option value={5} style={{color:'red'}}>Walka z jajem smoka (5)</option>
                            <option value={9} style={{color:'orange'}}>Super heroiczne zadanie (9)</option>

                        </select>
                        <input className='submit' type="submit" value="Zatwierdź"/>
                    </form>
                    <ul>
                        {this.props.tasks.uncompletedDaily.map(
                            (e,index)=>(
                                <li key={index} data-task-name={e.name} data-task-type={e.type}>
                                    <span>{e.name} ({e.type})</span>
                                    <div>
                                        <button onClick={this.props.completeDailyTask}>Wykonano</button>
                                        <button onClick={this.props.deleteDailyTask}>Usuń zadanie</button>
                                    </div>
                                </li>
                            )
                        )}
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
                {/*<div className='wood-container unsubmitted-tasks'>*/}
                {/*    <span>Zadania Zaległe</span>*/}
                {/*    <form>*/}
                {/*        /!*<input type="text" value="" placeholder='Nazwa zadania'/>*!/*/}
                {/*        /!*<input type="submit" value="Zatwierdź"/>*!/*/}
                {/*    </form>*/}
                {/*    <ul>*/}
                {/*        <li>a</li>*/}
                {/*        <li>a</li>*/}
                {/*        <li>a</li>*/}
                {/*        <li>a</li>*/}
                {/*        <li>a</li>*/}
                {/*        <li>a</li>*/}
                {/*    </ul>*/}

                {/*</div>*/}
            </div>

            );
    }
}

export default Tasks;