import './App.css';
import { BrowserRouter as Router, Routes,  Route  } from 'react-router-dom';
import Home from './component/home';
import Login from './component/login';
import Layanan from './component/layanan';
import Register from './component/register';
import Dokter from './component/dokter';
import Artikel from './component/artikel';
import Pesan from './component/pesan';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/login"   element={<Login/>} />
        <Route path="/layanan"  element={<Layanan/>}/>
        <Route path='*' element={<>Not found</>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/dokter' element={<Dokter/>}/>
        <Route path='/artikel' element={<Artikel/>}/>
        <Route path='/pesanDokter' element={<Pesan/>}/>
      </Routes>
  </Router> 
  
  );
}

export default App;
