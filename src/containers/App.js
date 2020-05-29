import React,{ Component } from 'react'; //The , after the React word is very important for syntax.
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../components/robots';// Using {} because in the robots.js file I am not using default after the export statement.
import Scroll from '../components/Scroll';
import './App.css';


//STATE =>> an object that describes your app in our case it is the robot and whatever is entered in the SEARCH BOX
//Props are simply things that come out state so the STATE>> feeds the child component with props. So the child receives it as {robots};
 
//How to start being able to use STATE, we have to transfor const App =()=>{return} function into a clarr
// const state = {
//  	robots: robots,
//  	searchfield:''
// }
class App extends Component { //or add {component} to the import statement after React. and delete React. from this line, also I can delete the arrow function statement and only leave the brakets.
		constructor(){ //this is how you add state to React;
			super()
				this.state={ //state is something that can change and affect your app.It usually lives in the parent component.
					robots: robots,
					searchfield:''
				}
					//console.log('constructor');
		}
		


	onSearchChange = (event) =>{ //I am adding arrow functions here so that I make the this.state happens in the App.js component. other wise it will happen in the SearBox.js component
		this.setState({ searchfield: event.target.value })

	}

	render(){
		const{ robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			return !robots.length ?
				 <h1>loading</h1> :
				(

					<div className='tc'>
						<h1 className='f1'>Find a RoboFriend</h1>
						<SearchBox searchChange={this.onSearchChange} />
						<Scroll>
							<CardList robots={filteredRobots} /> 
						</Scroll>
					</div>
				);	
	}
}	
			
export default App;	
		