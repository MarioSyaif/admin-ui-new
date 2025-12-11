import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp'; // pastikan file ini ada

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<SignInPage />} /> {/* default */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;