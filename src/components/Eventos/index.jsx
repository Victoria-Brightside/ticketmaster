import useEventsData from "../../hooks/useEventsData";

import EventItem from "../EventItem"
import styles from './Eventos.module.css'


const Eventos = ({ searchTerm }) => {
   const {events, isLoading, error} = useEventsData();

    const handleEventItemClick = (id) =>{
        console.log('Evento clickeado: ',id);
    };

    const renderEvents = () => {
        let eventsFiltered = events;

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

    if (error){
return<div> Ha ocurrido un console.error();
</div>
    }

    if (isLoading){
        return <div> Cargando resultados...</div>
    }

        return (
            <div>
                <p className={styles.titleEvents}>Eventos</p>
                {renderEvents()}
            </div>
        );
    }


    export default Eventos;