import React from 'react'
import {Main , Movies , Search , User} from './pages'
import {UserProfile , Spotify , Login , SignUp ,Home , Logout} from './components'
import {Switch , Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route  path='/movies' component={Movies}/>
       <Route path='/search' component={Search}/>
       <Route path='/profile' component={UserProfile}/>
       {/* <Route path='/spotify' component={Spotify}/>
       <Route path='/spotify' component={Spotify}/> */}
       <Route path='/signin' component={Login}/>
       <Route path='/signup' component={SignUp}/>
       <Route path='/logout' component={Logout}/>
      
     </Switch>
    </div>
  )
}

export default App
