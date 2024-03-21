import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Layout from './pages/Layout.jsx';
import Register from './pages/Register/Register.jsx';
import Team from './pages/Team/Team.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero/Hero.jsx';
import './App.css';
import Code from './Components/Hero/Code.jsx';
import "../src/Components/Hero/Back.scss";
import One from './Components/Hero/One.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Error from './pages/Error/Error.jsx';
import Tailwind from './Components/Hero/Tailwind.jsx';
import Faq from './Components/Hero/Faq.jsx';
import Stars from './Components/Stars/Stars.jsx';
// import TimelineComponent from './Components/Hero/Timelinee.jsx';
function App() {
  return (
    <> 
    
      <BrowserRouter>
    
       {/* <Hero/> */}
       {/* <Code/> */}
       <Navbar/>
       <Stars/>
       {/* <One/> */}
       <Tailwind/>
   {/* <TimelineComponent/> */}
      
        <Routes>
    
          <Route path='/' element={<Layout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Error />} />
       
        </Routes>
        <Faq/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
