// import logo from './logo.svg';
import './assets/css/App.css';
import './assets/css/reset.css'

import{Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Aboutme from './pages/aboutme/Aboutme';
import Contact from './pages/contact/Contact';
import Progress from './pages/progress/Progress';
import Resume from './pages/resume/Resume';
import Work from './pages/work/Work';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<Aboutme/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/progress' element={<Progress/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/work' element={<Work/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
