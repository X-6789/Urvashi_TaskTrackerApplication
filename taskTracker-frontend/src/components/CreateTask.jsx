// import React, { Component } from 'react'
// import TaskService from '../services/TaskService';

// class CreateTaskComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             // step 2
//             id: this.props.match.params.id,
//             firstName: '',
//             lastName: '',
//             emailId: ''
//         }
//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
//         this.saveOrUpdateTask = this.saveOrUpdateTask.bind(this);
//     }

//     // step 3
//     componentDidMount(){

//         // step 4
//         if(this.state.id === '_add'){
//             return
//         }else{
//             TaskService.getTaskById(this.state.id).then( (res) =>{
//                 let Task = res.data;
//                 this.setState({firstName: Task.firstName,
//                     lastName: Task.lastName,
//                     emailId : Task.emailId
//                 });
//             });
//         }        
//     }
//     saveOrUpdateTask = (e) => {
//         e.preventDefault();
//         let Task = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
//         console.log('Task => ' + JSON.stringify(Task));

//         // step 5
//         if(this.state.id === '_add'){
//             TaskService.createTask(Task).then(res =>{
//                 this.props.history.push('/Tasks');
//             });
//         }else{
//             TaskService.updateTask(Task, this.state.id).then( res => {
//                 this.props.history.push('/Tasks');
//             });
//         }
//     }

//     changeFirstNameHandler= (event) => {
//         this.setState({firstName: event.target.value});
//     }

//     changeLastNameHandler= (event) => {
//         this.setState({lastName: event.target.value});
//     }


//     changeEmailHandler= (event) => {
//         this.setState({emailId: event.target.value});
//     }

//     cancel(){
//         this.props.history.push('/Tasks');
//     }

//     getTitle(){
//         if(this.state.id === '_add'){
//             return <h3 className="text-center">Add Task</h3>
//         }else{
//             return <h3 className="text-center">Update Task</h3>
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <br></br>
//                    <div className = "container">
//                         <div className = "row">
//                             <div className = "card col-md-6 offset-md-3 offset-md-3">
//                                 {
//                                     this.getTitle()
//                                 }
//                                 <div className = "card-body">
//                                     <form>
//                                         <div className = "form-group">
//                                             <label> First Name: </label>
//                                             <input placeholder="First Name" name="firstName" className="form-control" 
//                                                 value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Last Name: </label>
//                                             <input placeholder="Last Name" name="lastName" className="form-control" 
//                                                 value={this.state.lastName} onChange={this.changeLastNameHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Email Id: </label>
//                                             <input placeholder="Email Address" name="emailId" className="form-control" 
//                                                 value={this.state.emailId} onChange={this.changeEmailHandler}/>
//                                         </div>

//                                         <button className="btn btn-success" onClick={this.saveOrUpdateTask}>Save</button>
//                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>

//                    </div>
//             </div>
//         )
//     }
// }

// export default CreateTaskComponent

import React, { useEffect, useState } from 'react'
import { createTask, getTask, updateTask } from '../services/TaskService'
import { useNavigate, useParams } from 'react-router-dom'
const CreateTask = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigator = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
   if(id){
    getTask(id).then((response)=>{
      setTitle(response.data.title)
      setDescription(response.data.description)
    }).catch(error =>{
      console.error(error);
    })
   }
  },[])
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleDescriptipon(e) {
    setDescription(e.target.value);
  }
  function saveOrUpdateTask(e) {
    e.preventDefault();
    const task = { title, description };
    console.log(task);
    if(id){
      updateTask(id, task).then((response)=>{
        console.log(response.data);
        navigator('/tasks')
      }).catch(error=>{
        console.error(error);
      })
    }
    else{
      createTask(task).then((response) => {
        console.log(response.data);
        navigator('/tasks')
      }
      ).catch(error=>{
        console.error(error);
      })
    }
    

  }
  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Edit Task</h2>
    }
    else {
      return <h2 className='text-center'>Create Task</h2>
    }
  }
  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form action="">
              <div className='form-group mb2'>
                <label className='form-label'>
                  Title
                </label>
                <input type="text" placeholder='Enter Title' name="title" value={title} className='form-control' onChange={handleTitle} />
              </div>
              <div className='form-group mb2'>
                <label className='form-label'>
                  Description
                </label>
                <input type="text" placeholder='Enter Description' name="description" value={description} className='form-control' onChange={handleDescriptipon} />
              </div>
              <br />
              <button className='btn btn-success' onClick={saveOrUpdateTask}>Submit</button>
            </form>
          </div>
        </div>


      </div >
    </div >
  )
}

export default CreateTask

