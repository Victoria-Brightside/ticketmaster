import { useState } from 'react';

import './App.css'
import Navbar from './components/Navbar'
import Eventos from './components/Eventos';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Eventos searchTerm={searchTerm} />
    </>

  )
}

export default App;
