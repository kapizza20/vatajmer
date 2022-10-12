import React from 'react'
import ReactDOM from 'react-dom'
import ClockDef from './ClockDef';
import '../src/style.css';

class App extends React.Component{
    state={time: Date.now()};

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render(){
        return <div><ClockDef now={this.state.time}/></div>
    }
    
}

ReactDOM.render(<App/>,document.querySelector('#root'));