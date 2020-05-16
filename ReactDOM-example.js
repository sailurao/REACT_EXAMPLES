import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
  constructor(){
    super();
    this.myDomHandler=this.myDomHandler.bind(this);
  }

  myDomHandler(){
    var my_dom=document.getElementById('my_div');
    ReactDom.findDOMNode(my_dom).style.color='green';
  };

  render(){
    return(
      <div>
         <button  onClick={this.myDomHandler}>CLICK ME </button>
         <h4 id='my_div'>OM SRI RAM </h4>
      </div>
    );
  }
}

export default App;
