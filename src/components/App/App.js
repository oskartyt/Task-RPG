import React,{Component} from 'react';
import './App.scss';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import Tasks from '../Tasks/Tasks';
import Character from '../Character/Character';
import NotFound from '../NotFound/NotFound';
import NotLoaded from '../NotLoaded/NotLoaded';
// import Fight from '../Fight/Fight';

class App extends Component{
  state={
      loggedIn:true,
      loadedContent:false,
      userData:{}
  };
  componentDidMount() {
      fetch('http://localhost:3002/users/user1')
          .then(data=>data.json())
          .then(data=>{
              console.log(data);
              if (
                  data.lastVisitDate.year===new Date().getFullYear() &&
                  data.lastVisitDate.month===new Date().getMonth() &&
                  data.lastVisitDate.day===new Date().getDate()
              ){
                  console.log('no date change');
                  this.setState({userData:data,loadedContent:true});
              }else{
                  console.log('date change');
                  let userData=data;
                  userData.lastVisitDate={year:new Date().getFullYear(),month:new Date().getMonth(), day:new Date().getDate()};
                  this.changeDataOnServer(userData);
              }

          })
          .catch(err=>{console.log(err)})
  }

  changeDataOnServer=(userData)=>{
      fetch('http://localhost:3002/users/user1', {
          method : 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      }).then(data=>data.json())
          .then(data=>{
              console.log(data);
              this.setState({userData:data,loadedContent:true});
          })
          .catch(err=>{console.log(err)});
  };

  newDailyTask=(name,type)=>{
      let newTask={name:name,type:type};
      let reloadedDailyTasks=this.state.userData.tasks.daily;
      reloadedDailyTasks.push(newTask);
      let userData=this.state.userData;
      userData.tasks.daily= reloadedDailyTasks;
      this.changeDataOnServer(userData)
  };

  deleteDailyTask=(e)=>{
      let target=e.target.parentElement.parentElement;
      let reloadedDailyTasks=this.state.userData.tasks.daily;
      reloadedDailyTasks=reloadedDailyTasks.filter((v)=>v.name!==target.dataset.taskName);

      let userData=this.state.userData;
      userData.tasks.daily= reloadedDailyTasks;
      this.changeDataOnServer(userData)
  };

  completeDailyTask=()=>{};


  render() {
    if (this.state.loggedIn){
      return (
          <HashRouter>
              <div className='main-container'>
                  <Header/>
                  <section className='main-section'>
                      <Sidebar/>
                      <div className='main-elements'>
                          {(this.state.loadedContent?
                                  <Switch>
                                      <Route exact path='/' render={()=><Tasks tasks={this.state.userData.tasks}
                                                                               addDailyTask={this.newDailyTask}
                                                                               deleteDailyTask={this.deleteDailyTask}
                                      />}/>
                                      <Route path='/character' component={Character}/>
                                      <Route component={NotFound}/>
                                  </Switch>
                                  :
                                  <NotLoaded/>
                          )}

                      </div>
                  </section>
              </div>
          </HashRouter>
      )
    }else{
      return <h1>strona logowania</h1>
    }

  }
}

export default App;
