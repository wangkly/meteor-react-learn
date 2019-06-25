import React,{Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import Task from '../api/task';

import TaskItem from './task-item';

 class Todo extends Component{

    constructor(props){
        super(props)
        this.state={
            text:''
        }        
    }

        render(){

            let {tasks} = this.props;
            return(
                <div className="todo-container">
                    <div className="submit-area">
                        <input type="text" value={this.state.text} onChange={this.changeText} />
                        <button onClick={this.submitData}>提交</button>
                    </div>

                    <div className="todo-list">
                        {
                            tasks.map((task,index)=>{
                                return <TaskItem  key={index} task={task}/>
                            })
                        }
                    </div>

                </div>
            )
        }


        changeText=(e)=>{
            let text = e.target.value;
            this.setState({
                text
            })
        }



        submitData =()=>{
            let {text} = this.state;
            console.log(text)
            Meteor.call('addTask',text);
        }
}

export default withTracker((props)=>{
    return {
        tasks:Task.find().fetch()
    }
})(Todo);