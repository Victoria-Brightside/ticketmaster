import './Navbar.css'
import { useState, forwardRef, useImperativeHandle } from "react";

const Navbar =forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState('');

    useImperativeHandle(ref, () =>({
search,
    }));

    const handleInputChange = (evt) => {
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search);
        }
    };

    return (
        <div ref={ref} className='navbarContainer'>
            <p className='navbarTitle'>Mi ticketmaster</p>
            <input
                placeholder="Busca tu evento favorito"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search}
                className='navbarInput'
            />
        </div>
    )
});

export default Navbar;