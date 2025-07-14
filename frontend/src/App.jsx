import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify';
import Predictor from './pages/Predictor';
import HeartDiseaseForm from "./pages/HeartDiseaseForm";
import DiabetesForm from "./pages/DiabetesForm";
import LungCancerForm from './pages/LungCancerForm';

// 🔹 Import the ChatBot page
import ChatBotPage from './pages/ChatBotPage';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/verify' element={<Verify />} />

        {/* 🔹 ChatBot Route */}
        <Route path='/chatbot' element={<ChatBotPage />} />

        {/* Predictors */}
        <Route path='/predictor' element={<Predictor />} />
        <Route path='/predictor/heart-disease' element={<HeartDiseaseForm />} />
        <Route path='/predictor/diabetes' element={<DiabetesForm />} />
        <Route path='/predictor/lung-cancer' element={<LungCancerForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;