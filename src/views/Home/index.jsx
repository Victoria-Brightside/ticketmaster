import { useRef, useState } from 'react';


import Navbar from '../../components/Navbar'
import Eventos from '../../components/Eventos'

const Home = () => {
const [searchTerm, setSearchTerm] = useState('');
const containerRef = useRef();

const handleNavbarSearch = (term) => {
    setSearchTerm(term);
};

return (
    <>
        <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
        <Eventos searchTerm={searchTerm} />
    </>

)
}

export default Home;
