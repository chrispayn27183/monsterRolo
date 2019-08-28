import React, {Component} from 'react';
//import logo from './logo.svg';
import {CardList } from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        // {name: 'Frank', id: 1},
        // {name: 'Dracula', id: 2},
        // {name: 'Sully', id: 3},
        // {name: 'Randal', id: 4}
      ],
      searchField: '',
      title: 'Monsters'
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
    <div className="App">
      <h1>{this.state.title} </h1>

      <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>   {/*this.handleChange*/}
      <CardList monsters={filteredMonsters}></CardList>
      
      
      
      <button onClick={() => this.setState({title: 'Here be monsters'})}> Here be button </button>
    </div>
    
    )
  };
}

export default App;
