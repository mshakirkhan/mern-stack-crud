import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserList from './users/UserList';
import CreateUser from './users/CreateUser';
import EditUser from './users/EditUser';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList/>} />
          <Route path='/create' element={<CreateUser/>} />
          <Route path='/edit/:id' element={<EditUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
