import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ClockDef from './ClockDef';
import '../src/style.css';

class App extends React.Component{
    state={time: Date.now()};
    searchTerms=['captain','military','army','guns'];
    term=this.searchTerms[Math.round(Math.random()*(4-0)+0)];
    loadBackground(){
    console.log(Math.round(Math.round(Math.random()*(4-0)+0)));
      axios.get('https://api.unsplash.com/search/photos',{
          params:{
              query:this.term
          },
          headers:{
              Authorization:'Client-ID WJBDA7k6tMD-qmFzO2UPrXXfw-Qj1Cb29VygJBXyBqE'
          }
      })
      .then((response)=>{
          let backgroundPic=response.data.results[Math.round(Math.random()*(9-1)+1)].urls.full;
          document.body.style.backgroundImage=`url("${backgroundPic}")`;
      })
    }
    componentDidMount() {
        this.loadBackground();
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
