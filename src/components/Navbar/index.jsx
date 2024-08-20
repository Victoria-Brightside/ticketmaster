import { useState } from "react"

const handleInputChange = (evt) => {
    setSearch(evt.target.value);
};


const Navbar = () => {
    return (
        <div>
            <p>Mi ticketmaster</p>
            <input
                placeholder="Busca tu evento favorito"
                onChange={handleInputChange}
                value={search}
            />
        </div>
    )
};


export default Navbar;