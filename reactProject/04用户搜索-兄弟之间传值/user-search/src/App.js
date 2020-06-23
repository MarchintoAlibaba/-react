import React from 'react';
import './style.css';
import Sss from './image';
import Search from './search';

class App extends React.Component{
  state = {
    wordsaa:'',
  }
  setWrods = (wordsaa) => {
    this.setState({
      wordsaa:wordsaa
    })
  }
  render(){
    return (
      <div>
        <Search setWrods={this.setWrods}></Search>
        <Sss searchwords={this.state.wordsaa}></Sss>
      </div>
    )
  }
}

export default App;
