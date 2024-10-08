import {useNavigate} from "react-router-dom";

import useEventsData from "../../hooks/useEventsData";

import EventItem from "../EventItem"
import styles from './Eventos.module.css'


const Eventos = ({ searchTerm, events }) => {
const navigate = useNavigate();


    const handleEventItemClick = (id) =>{
        navigate(`/detail/${id}`);
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

        return (
            <div>
                <p className={styles.titleEvents}>Eventos</p>
                {renderEvents()}
            </div>
        );
    }


    export default Eventos;