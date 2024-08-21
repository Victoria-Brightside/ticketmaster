import { useState } from 'react'

import EventItem from "../EventItem"
import eventsJSON from "../../data/events.json";



const Eventos = ({ searchTerm }) => {
    const [data] = useState(eventsJSON);
    const dataEvento = data._embedded.events;

    const handleEventItemClick = (id) =>{
        console.log('Evento clickeado: ',id);
    };

    const renderEvents = () => {
        let eventsFiltered = dataEvento;

        if(searchTerm.length>0){
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLowerCase().includes(searchTerm));
        }

        return eventsFiltered.map((evento) => (
            <EventItem
                key={`event-item-${evento.id}`}
                name={evento.name}
                info={evento.info}
                image={evento.images[0].url}
                onEventClick= {handleEventItemClick}
                id={evento.id}
            />
        ));
    };

        return (
            <div>
                <p>Eventos</p>
                {renderEvents()}
            </div>
        );
    }


    export default Eventos;