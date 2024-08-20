import { useState } from 'react'

import EventItem from "../EventItem"
import eventsJSON from "../../data/events.json";



const Eventos = () => {
    const [data] = useState(eventsJSON);
    const dataEvento = data._embedded.events;

    const eventsComponent = dataEvento.map((evento) => (
     <EventItem 
     key={`event-item-${evento.id}`}
     name={evento.name}
     info={evento.info}
     image={evento.images[0].url}
     />
    ));

    return (
        <div>
            <p>Eventos</p>
            {eventsComponent}
        </div>
    );
}


export default Eventos;