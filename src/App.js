import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/LoginForm/LoginForm';
import { SignUpForm } from "./components/SignUpForm/SignUpForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm/ >} />
          <Route path="/signup" element={<SignUpForm/ >} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
