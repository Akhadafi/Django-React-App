import { Component } from 'react';
import './App.css';

const tasks = [
  {
    "id": 1,
    "title": "Learn",
    "description": "lorem................................",
    "completed": false
  },
  {
    "id": 2,
    "title": "Play Game",
    "description": "lorem..",
    "completed": false
  },
  {
    "id": 3,
    "title": "Play Game",
    "description": "lorem..",
    "completed": true
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewCompleted:false,
      taskList:tasks,
    }
  }

  displayCompleted = status => {
    if (status) {
      return this.setstatus({ viewCompleted:true })
    }
    return this.setstatus({ viewCompleted:false })
  }

  renderTabList = () =>  {
    return (
      <div className="my-5 tab-list">
        <div className="tab-list-item">
          <span
            onClick={() => this.displayCompleted(false)}
            className={this.state.viewCompleted ? "active" : ""}
          >Completed</span>
          <span
            onClick={() => this.displayCompleted(true)}
            className={this.state.viewCompleted ? "" : "active"}
          >Incomplete</span>
        </div>
      </div>
    )
  }

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(
      item => item.completed === viewCompleted
    )

    return newItems.map(item => (
      <li
        key={item.id}
        className='list-group-item d-flex justify-content-between align-items-center'
      >
        <span
          className={`todo-title mr-2 ${this.state.viewComplted ? "completed-todo" : "" }`}
          title={item.title}
        >
          {item.title}
        </span>
        <span>
          <button className='btn btn-info mx-2'>Edit</button>
          <button className='btn btn-danger'>Delete</button>
        </span>
      </li>
    ))
  }

  render() {
    return (
      <main className='context'>
        <h1 className='text-black text-uppercase text-center my-4'> Task Manager </h1>
        <div className='row'>
          <div className='col-md-6 col-sm-10 mx-auto p-0'>
            <div className='card p-3'>
              <div>
                <button className='btn btn-warning btn-sm'>Add Task</button>
              </div>
              {this.renderTabList()}
              <ul className='list-group list-group-flush'>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    )
  }

}


export default App;
