import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

class App extends React.Component{

  render(){
    return(
      <div>
        <span><a href="#" onClick={()=>{FlowRouter.go("Hello")}} >hello</a> </span>
        <span><a href="#" onClick={()=>{FlowRouter.go("Todo")}} >todo</a> </span> 
        <span><a href="#" onClick={()=>{FlowRouter.go("Links")}} >Links</a> </span> 
        {this.props.content}
      </div>
    )
  }

}



export default App;
