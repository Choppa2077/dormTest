import './App.css';
import { Route, Routes } from 'react-router-dom';
import StudentRegistartion from './pages/studentRegistration/StudentRegistartion';
import MainPage from './pages/main/MainPage';
import Login from './pages/Login/Login';
import GuestHouse from './pages/guestHouse/GuestHouse';
function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/studentRegistration" element={<StudentRegistartion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/guestHouse" element={<GuestHouse />} />
      </Routes>
    </>
  );
}

export default App;
