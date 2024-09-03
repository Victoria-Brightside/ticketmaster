import { useRef, useState } from 'react';

import './App.css'
import Navbar from './components/Navbar'
import Eventos from './components/Eventos';
import SignupForm from './components/SignupForm';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef();

  const handleNavbarSearch = (term) => {
    console.log(containerRef.current)
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Eventos searchTerm={searchTerm} />
    </>

  )
}

export default App;
