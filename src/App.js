import React from 'react';
import CardComponents from './CardComponents'
// import { robots } from './robots'
import Searchbox from './Searchbox';
import './App.css'
// import Serachbox from './Searchbox'
import Scroll from './Scroll.js'


class App extends React.Component{
    constructor()
    {
        super();
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        console.log('check');
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users =>{
            this.setState({ robots: users});
        });
        
    }
    onsearchchange=(event)=>
    {   
        this.setState({searchfield:event.target.value})

    }
    render(){

       
        const filteredrobots=this.state.robots.filter(robot=>{

            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if(this.state.robots.length===0)
        {
            return <h1 className="tc" >Loading.</h1>
        }

        console.log(filteredrobots);
        
        return (<div className="tc ">
        <h1 className="tc f1">RoboFriends</h1>
        <Searchbox searchchange={this.onsearchchange}/>
        <Scroll>
        <CardComponents robots={filteredrobots} />
        </Scroll>
        </div>      
    );
    }
}
export default App;
