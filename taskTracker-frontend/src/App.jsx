
import './App.css'
import ListTaskComponent from './components/ListTasks'
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer'
import CreateTask from './components/CreateTask'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {


  return (
    <>
        <BrowserRouter>
              <HeaderComponent />
                <div>
                    {/* <Switch>  */}
                    <Routes>
                          <Route path = "/" element = {<ListTaskComponent/>}></Route>
                          <Route path = "/tasks" element = {<ListTaskComponent/>}></Route>
                          <Route path = "/add-task" element = {<CreateTask/>}></Route>
                          <Route path = "/edit-task/:id" element = {<CreateTask/>}></Route>
                          
                    </Routes>
                </div>
              <FooterComponent />
        </BrowserRouter>
    </>
  )
}

export default App
