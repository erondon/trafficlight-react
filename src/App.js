import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

constructor (){
  super();
  this.state = {
    selectedLight: null
  };
}
render (){
  console.log(this.state);
  let selRed = '';
  let selYellow = '';
  let selGreen = '';

  if (this.state.selectedLight == 'red') {selRed = 'selected'};
  if (this.state.selectedLight == 'yellow') {selYellow = 'selected'};
  if (this.state.selectedLight == 'green') {selGreen = 'selected'};

  return (
    
    <div className='container'>
        <div className={'red light '+ selRed} onClick={()=> this.setState({selectedLight: 'red'})}></div>
        <div className={'yellow light '+ selYellow} onClick={()=> this.setState({selectedLight: 'yellow'})}></div>
        <div className={'green light '+ selGreen} onClick={()=> this.setState({selectedLight: 'green'})}></div>
      </div>
  );

}
}

export default App;

/* 

      <div className='container'>
        <div className='red light'></div>
        <div className='yellow light'></div>
        <div className='green light'></div>
      </div>





*/