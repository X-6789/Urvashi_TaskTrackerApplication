// import axios from 'axios';

// const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

// class EmployeeService {

//     getEmployees(){
//         return axios.get(EMPLOYEE_API_BASE_URL);
//     }

//     createEmployee(employee){
//         return axios.post(EMPLOYEE_API_BASE_URL, employee);
//     }

//     getEmployeeById(employeeId){
//         return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
//     }

//     updateEmployee(employee, employeeId){
//         return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
//     }

//     deleteEmployee(employeeId){
//         return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
//     }
// }

// export default new EmployeeService()

import axios from 'axios';

const Task_API_BASE_URL = "http://localhost:8080/api/tasks";
export const listTasks=()=>{
    return axios.get(Task_API_BASE_URL);
}

export const createTask =(task)=> axios.post(Task_API_BASE_URL, task);

export const getTask= (taskId)=> axios.get(Task_API_BASE_URL+ '/'+taskId);

export const updateTask = (taskId, task) => axios.put(Task_API_BASE_URL+'/'+taskId, task)
export const deleteTask = (taskId)=> axios.delete(Task_API_BASE_URL+'/'+taskId)

