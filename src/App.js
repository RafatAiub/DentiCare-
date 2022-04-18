
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/CheckOut/Checkout';
import Doctor from './Pages/Doctor/Doctor';
import Contact from './Pages/Home/Contact/Contact';
import HomeView from './Pages/Home/HomeView/HomeView';
import TreatmentDetails from './Pages/Home/Treatment/TreatmentDetails';
import Treatments from './Pages/Home/Treatments/Treatments';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequiredAuth from './Pages/Login/RequiredAuth';
import Footer from './Shared/Footer';
import Header from './Shared/Header';
import NotFound from './Shared/NotFound';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomeView></HomeView>}></Route>
        <Route path='/doctor' element={<Doctor></Doctor>}></Route>
        <Route path='/about-me' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/home' element={<HomeView></HomeView>}></Route>
        {/* <Route path='/home#treatment' element={<Treatments></Treatments>}></Route> */}
        <Route path='/treatments/:name' element={<TreatmentDetails></TreatmentDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<RequiredAuth>
          <Checkout></Checkout>
        </RequiredAuth>}></Route>
        <Route path='/contact-us' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
