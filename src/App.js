import React , {Component} from 'react';
import Timer from "./components/timer.js";



class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
    <div className="App">
      
      <Timer/>

    </div>
    )
  }
}

export default App;
