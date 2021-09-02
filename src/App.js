import { Component } from 'react';
import  './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
super();
this.state = {
  monster: [],
  searchField: ''
}
// this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({ monster : users}))
  }
  handleChange = e => {
    this.setState({searchField:e.target.value})
  }
  render(){
    const { monster, searchField} = this.state;
    const filterMonster = monster.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
     {/* <input type='search' placeholder="search monster" onChange={e => this.setState({searchField:e.target.value})}/> */}
     <SearchBox placeholder="search monster"
     handleChange={this.handleChange}
     />
     <CardList monster = {filterMonster}/>
     
    </div>
    )
  }
}

export default App;
