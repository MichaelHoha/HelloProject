import React, { Component } from 'react'
import AllTasks from './AllTasks';

export default class AddTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            task: '',
        }

    }

    taskValid = (e) => {
        this.setState({ task: e.target.value });

    }

    render() {
        return (
            <div className='add-task'>
                <div className='main'>
                    <input onChange={this.taskValid} type='text' placeholder='Whats your next move!' />

                    <button className='task-button' onClick={() => {
                        this.props.addItem(this.state.task)
                    }}>Add</button><br />

                    <h1 id='list-title'>List.</h1> <br/><br/> <br/>

                    {this.props.list.map((element, index) => {
                        return (
                            <p className='task'>{element.task}
                                <button onClick={() => this.props.deleteItem(index)} className='delete-but'>X</button>
                            </p>
                        )
                    })}

                </div>
            </div>
        )
    }
}
