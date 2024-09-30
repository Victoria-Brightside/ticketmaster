import { useEffect, useRef, useState } from 'react';


import Navbar from '../../components/Navbar'
import Eventos from '../../components/Eventos'
import useEventsData from '../../hooks/useEventsData';

const Home = () => {
    const { events, isLoading, error, fetchEvents } = useEventsData();
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef();

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword=${term}`);
    };

    const renderEvents = () => {
        if (isLoading) {
            return <div>Cargando resultados...</div>;
        }

        if (error) {
            return <div> Ha ocurrido un error</div>;
        }
    }
        

    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {renderEvents()}
            <Eventos searchTerm={searchTerm} events={events} />
        </>

    )
}

export default Home;
