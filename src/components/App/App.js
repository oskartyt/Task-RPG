import React, {Component} from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux"

import Header from '../Header/Header';

import Tasks from '../Tasks/Tasks';
import Character from '../Character/Character';
import NotFound from '../NotFound/NotFound';
import NotLoaded from '../NotLoaded/NotLoaded';
import LogIn from '../LogIn/LogIn'

import {getDataAction} from "../../actions/dataActions";
import {getMonsterDataAction} from "../../actions/dataActions";

const mapStateToProps=state=>{
    return{
        loggedIn: state.loggedIn,
        userData: state.userData,
        monsterData: state.monsterData
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        getData: ()=>dispatch(getDataAction()),
        getMonsterData: ()=>dispatch(getMonsterDataAction())
    }
};

class ConnectedApp extends Component{
  state={
      // loggedIn:true,
      loadedUserContent:false,
      loadedMonstersContent:false,
      userData:{},
      monstersData: {}
  };
  componentDidMount() {
      this.props.getData();
      this.props.getMonsterData();
      fetch('http://localhost:3002/users/user1')
          .then(data=>data.json())
          .then(data=>{
              console.log(data);
              this.setState({userData:data,loadedUserContent:true});//temporary line
              // if (
              //     data.lastVisitDate.year===new Date().getFullYear() &&
              //     data.lastVisitDate.month===new Date().getMonth() &&
              //     data.lastVisitDate.day===new Date().getDate()
              // ){
              //     console.log('no date change');
              //     this.setState({userData:data,loadedUserContent:true});
              // }else{
              //     console.log('date change');
              //     let userData=data;
              //     userData.lastVisitDate={year:new Date().getFullYear(),month:new Date().getMonth(), day:new Date().getDate()};
              //     userData.tasks.uncompletedDaily=userData.tasks.daily;
              //     this.changeDataOnServer(userData);
              // }

          })
          .catch(err=>{console.log(err)});

      fetch('http://localhost:3002/monsters')
          .then(data=>data.json())
          .then(data=>{
              this.setState({monstersData:data,loadedMonstersContent:true});
          })
          .catch(err=>{console.log(err)})
  }

  changeDataOnServer=(userData)=>{
      console.log(userData);
      fetch('http://localhost:3002/users/user1', {
          method : 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      }).then(data=>data.json())
          .then(data=>{
              // console.log(data);
              this.setState({userData:data,loadedUserContent:true});
          })
          .catch(err=>{console.log(err)});
  };

  newDailyTask=(name,type)=>{
      let newTask={name:name,type:type};
      let reloadedDailyTasks=this.state.userData.tasks.daily;
      reloadedDailyTasks.push(newTask);
      let reloadedUncompletedDailyTasks=this.state.userData.tasks.uncompletedDaily;
      reloadedUncompletedDailyTasks.push(newTask);

      let userData=this.state.userData;
      userData.tasks.daily= reloadedDailyTasks;
      userData.tasks.uncompletedDaily=reloadedUncompletedDailyTasks;
      this.changeDataOnServer(userData)
  };

  deleteDailyTask=(e)=>{
      let taskName=e.target.parentElement.parentElement.dataset.taskName;
      let reloadedDailyTasks=this.state.userData.tasks.daily;
      reloadedDailyTasks=reloadedDailyTasks.filter((v)=>v.name!==taskName);
      let reloadedUncompletedDailyTasks=this.state.userData.tasks.uncompletedDaily;
      reloadedUncompletedDailyTasks=reloadedUncompletedDailyTasks.filter((v)=>v.name!==taskName);

      let userData=this.state.userData;
      userData.tasks.daily= reloadedDailyTasks;
      userData.tasks.uncompletedDaily=reloadedUncompletedDailyTasks;
      this.changeDataOnServer(userData)
  };

  completeDailyTask=(e)=>{
      let taskName=e.target.parentElement.parentElement.dataset.taskName;
      let taskType=parseInt(e.target.parentElement.parentElement.dataset.taskType);
      let reloadedUncompletedDailyTasks=this.state.userData.tasks.uncompletedDaily;
      reloadedUncompletedDailyTasks=reloadedUncompletedDailyTasks.filter((v)=>v.name!==taskName);

      let userData=this.state.userData;
      userData.tasks.uncompletedDaily=reloadedUncompletedDailyTasks

      let monsterDamage=userData.currentMonster.takenDamage;
      let monsterMaxHealth=userData.currentMonster.healthMax;
      monsterDamage+=taskType;
      if (monsterDamage>=monsterMaxHealth){
          let monsterPrize=userData.currentMonster.gold;
          userData.basicData.colectedGold+=monsterPrize;
          userData.currentMonster=this.state.monstersData[Math.floor(Math.random()*this.state.monstersData.length)];
          userData.currentMonster.takenDamage=monsterDamage-monsterMaxHealth;
          userData.basicData.killedMonsters+=1;
          if (userData.basicData.killedMonsters===20){
              userData.basicData.killedMonsters=0;
              userData.basicData.gainedLootboxes+=1;
          }
          console.log(userData)
      }else{
          userData.currentMonster.takenDamage=monsterDamage;
      }
      this.changeDataOnServer(userData)
  };


  render() {
      return (
          <HashRouter>
              <div className='main-container'>
                  <Header/>
                  <section className='main-section'>
                      {/*<Sidebar/>*/}
                      <div className='main-elements'>
                          {(this.props.loggedIn)?

                              ((this.props.userData && this.props.monsterData)?
                                  <Switch>
                                      <Route exact path='/' render={()=><Tasks
                                          tasks={this.state.userData.tasks}
                                          addDailyTask={this.newDailyTask}
                                          deleteDailyTask={this.deleteDailyTask}
                                          completeDailyTask={this.completeDailyTask}
                                      />}/>
                                      <Route path='/character' render={()=><Character
                                          currentMonster={this.state.userData.currentMonster}
                                          basicData={this.state.userData.basicData}
                                      />}/>
                                      <Route component={NotFound}/>
                                  </Switch>
                                  :
                                  <NotLoaded/>
                              )
                              :
                              <LogIn/>
                          }


                      </div>
                  </section>
              </div>
          </HashRouter>
      )
  }
}

const App=connect(mapStateToProps,mapDispatchToProps)(ConnectedApp);
export default App;
