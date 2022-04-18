
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Home/Contact/Contact';
import HomeView from './Pages/Home/HomeView/HomeView';
import Treatment from './Pages/Home/Treatments/Treatment';
import Footer from './Shared/Footer';
import Header from './Shared/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomeView></HomeView>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/home' element={<HomeView></HomeView>}></Route>
        <Route path='/treatments' element={<Treatment></Treatment>}></Route>
        <Route path='/contact-us' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
