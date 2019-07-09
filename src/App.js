import React from 'react';
import './App.css';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );
    return (
      <div className="App">
        <h2 className="header">Monsters Rolodex</h2>
        <SearchBox
          onChange={this.handleChange}
          placeholder="Search monsters..."
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
