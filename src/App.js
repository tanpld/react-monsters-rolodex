import React from 'react';
import './App.css';

import CardList from './components/CardList';

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

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monsters..."
          onChange={this.handleChange}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
