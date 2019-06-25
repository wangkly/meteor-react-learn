import React,{Component} from 'react';

export default class TaskItem extends Component{

    render(){
        let {task} = this.props;
        return(
            <div className="task-item" >
                <span>{task.text}</span>    
            </div>
        )
    }

}