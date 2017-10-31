import React from 'react';
import { Route,Switch } from 'react-router'
import App from 'src/App';
import { withRouter } from 'react-router'
import Shopingmall from 'view/shoping/shopingmall.jsx';
import shopDetails from 'view/shoping/shopDetails.jsx';
import Person from 'view/home/person';
import Login from 'view/login';
import Test from 'src/components/component/test.jsx';
import Activity from 'src/view/activity/activity';
import Activitylisst from 'src/view/activity/activitylist';
import ActivitygoodDetails from 'src/view/activity/activitygoodDetails';
import ActivityNotes from 'src/view/home/activityNotes.jsx';
import CofirmAwardInfo from 'src/view/home/cofirmAwardInfo.jsx';
import Commounity from 'src/view/community/community.js';

const person =withRouter((opt) =>{
	let { match } = opt;
return  (
   <Switch>
    	<Route path={`${match.url}/center`} component={Person}/>
      <Route path={`${match.url}/activityNotes`} component={ActivityNotes}/>
      <Route path={`${match.url}/cofirmAwardInfo`} component={CofirmAwardInfo}/>
       	<Route  component={Nofound}/>
     </Switch>
 
)})
const mall =withRouter(({ match }) => (
  <Switch>
    <Route path={`${match.url}/shoping`} component={Shopingmall}/>
    <Route path={`${match.url}/shopDetails`} component={shopDetails}/>
  	<Route  component={Nofound}/>
    </Switch>
))
const community =withRouter(({ match }) => (
  <Switch>
    	<Route path={`${match.url}/commounity`} component={Commounity}/>
 		   <Route  component={Nofound}/>
     </Switch>
))
const activity =withRouter(({ match }) => (
   <Switch>
    	<Route path={`${match.url}/activity`} component={Activity}/>
      <Route path={`${match.url}/activitygoodDetails`} component={ActivitygoodDetails}/>
      <Route path={`${match.url}/activitylist`} component={Activitylisst}/>
 		<Route  component={Nofound}/>
     </Switch>
))
const  Nofound= React.Component({
  render() {
  
    return <h3>Nofound</h3>
  }
})


const routes = ()=>(

     <App>
     	<Switch>
	        <Route exact path="/" component={Test}/>
	        <Route path="/activity" component={activity}/>
	        <Route path="/mall" component={mall}/>
	        <Route path="/commounity" component={community}/>
	        <Route path="/person" component={person}/>
          <Route path="/login" component={Login}/>
	        <Route  component={Nofound}/>
        </Switch>
      </App>
  )

     
export default routes;