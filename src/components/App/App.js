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
              this.setState({userData:data});
              this.setState({loadedContent:true})
          })
          .catch(err=>{console.log(err)})
  }

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
                                      <Route exact path='/' component={Tasks}/>
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
