import React, { Component, useState, useEffect } from 'react'
import { listTasks, deleteTask } from '../services/TaskService'
import { useNavigate } from 'react-router-dom';

// class ListTaskComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//                 Tasks: []
//         }
//         this.addTask = this.addTask.bind(this);
//         this.editTask = this.editTask.bind(this);
//         this.deleteTask = this.deleteTask.bind(this);
//     }

//     deleteTask(id){
//         TaskService.deleteTask(id).then( res => {
//             this.setState({Tasks: this.state.Tasks.filter(Task => Task.id !== id)});
//         });
//     }
//     viewTask(id){
//         this.props.history.push(`/view-Task/${id}`);
//     }
//     editTask(id){
//         this.props.history.push(`/add-Task/${id}`);
//     }

//     componentDidMount(){
//         TaskService.getTasks().then((res) => {
//             this.setState({ Tasks: res.data});
//         });
//     }

//     addTask(){
//         this.props.history.push('/add-Task/_add');
//     }

//     render() {
//         return (
//             <div>
//                  <h2 className="text-center">Tasks List</h2>
//                  <div className = "row">
//                     <button className="btn btn-primary" onClick={this.addTask}> Add Task</button>
//                  </div>
//                  <br></br>
//                  <div className = "row">
//                         <table className = "table table-striped table-bordered">

//                             <thead>
//                                 <tr>
//                                     <th> Task Title</th>
//                                     <th> Task Description</th>

//                                     <th> Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     this.state.Tasks.map(
//                                         Task => 
//                                         <tr key = {Task.id}>
//                                              <td> { Task.title} </td>   
//                                              <td> {Task.description}</td>

//                                              <td>
//                                                  <button onClick={ () => this.editTask(Task.id)} className="btn btn-info">Update </button>
//                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTask(Task.id)} className="btn btn-danger">Delete </button>
//                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewTask(Task.id)} className="btn btn-info">View </button>
//                                              </td>
//                                         </tr>
//                                     )
//                                 }
//                             </tbody>
//                         </table>

//                  </div>

//             </div>
//         )
//     }
// }

// export default ListTaskComponent


const ListTaskComponent = () => {
    const [tasks, setTasks] = useState([]);
    const navigator = useNavigate();
    useEffect(() => {

        listTasks().then((response) => {
            setTasks(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function addNewTask() {
        navigator('/add-task')

    }
    function updateTask(id) {
        navigator(`/edit-task/${id}`)

    }
    function removeTask(id) {
        console.log(id);
        deleteTask(id).then((response) => {
            listTasks().then((response) => {
                setTasks(response.data);
            }).catch(error => {
                console.error(error);
            })
        }).catch(error => {
            console.error(error);
        })
    }
    return (
        <div className='container'>
            <h2 className="text-center">Tasks List</h2>
            <div >
                <button className="btn btn-primary" onClick={addNewTask}> Add Task</button>
            </div>
            <br></br>
            <div >
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>Tasks Id</th>
                            <th> Task Title</th>
                            <th> Task Description</th>

                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(
                                Task =>
                                    <tr key={Task.id}>
                                        <td>{Task.id}</td>
                                        <td> {Task.title} </td>
                                        <td> {Task.description}</td>

                                        <td>
                                            <button style={{ marginLeft: "20px" }} onClick={() => updateTask(Task.id)} className="btn btn-info">Edit </button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => removeTask(Task.id)} className="btn btn-danger">Delete </button>
                                            {/* <button style={{marginLeft: "10px"}} onClick={} className="btn btn-info">View </button> */}
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>

    )
}
export default ListTaskComponent