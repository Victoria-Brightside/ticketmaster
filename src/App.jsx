import { useState } from 'react';

import './App.css'
import Navbar from './components/Navbar'
import Eventos from './components/Eventos';
import SignupForm from './components/SignupForm';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
    <SignupForm/>
      <Navbar onSearch={handleNavbarSearch} />
      <Eventos searchTerm={searchTerm} />
    </>

  )
}

export default App;
