import {useEffect} from "react";
import Footer from "../Footer";
import {
    FaDog,
    FaCar,
    FaCalendarAlt,
    FaUtensils,
    FaHome,
    FaLock,
    FaUser,
    FaKey,
    FaRegHospital,
    FaCarAlt
} from 'react-icons/fa';
import { IoMdRestaurant } from 'react-icons/io';
import {Link, useNavigate} from "react-router-dom";

function Services() {
    useEffect(() => {
        document.title = "Diensten | D&S Security";
    });

    const navigate = useNavigate();

    // Scroll to the top of the page when a service link is clicked
    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    // Diensten array met hun beschrijvingen en iconen
    const services = [
        {
            name: "Bewaking met honden",
            description: "Professionele bewaking met getrainde honden om eigendommen te beschermen.",
            icon: <FaDog />
        },
        {
            name: "Chauffeursdiensten",
            description: "Veilige en betrouwbare chauffeursdiensten voor transportbehoeften.",
            icon: <FaCar />
        },
        {
            name: "Evenementsbeveiliging",
            description: "Beveiliging op evenementen om ervoor te zorgen dat alles soepel verloopt.",
            icon: <FaCalendarAlt />
        },
        {
            name: "Horecabeveiliging",
            description: "Beveiligingsservices voor horecagelegenheden om klanten en personeel te beschermen.",
            icon: <IoMdRestaurant />
        },
        {
            name: "Huismeester",
            description: "Diensten voor het beheren en onderhouden van gebouwen en eigendommen.",
            icon: <FaHome />
        },
        {
            name: "Mobile surveillance",
            description: "Flexibele surveillance om te reageren op veranderende beveiligingsbehoeften.",
            icon: <FaCarAlt />
        },
        {
            name: "Objectbeveiliging",
            description: "Beveiligingsservices voor het beschermen van specifieke objecten en locaties.",
            icon: <FaLock />
        },
        {
            name: "Persoonsbeveiliging",
            description: "Individuele beveiliging voor het beschermen van personen tegen potentiële bedreigingen.",
            icon: <FaUser />
        },
        {
            name: "Receptiebeveiliging",
            description: "Beveiligingsdiensten bij recepties om een veilige omgeving te waarborgen.",
            icon: <FaKey />
        },
        {
            name: "Zorgbeveiliging",
            description: "Beveiligingsservices voor zorginstellingen en zorgverleners.",
            icon: <FaRegHospital />
        }
    ];

    return (
        <div>
            <div className="services-container">
                <h2 className='service-text'>
                    <span className="ds-security">D&S Security</span> biedt een uitgebreid schaal aan <span
                    className="diensten">diensten</span>,
                    waarmee we op maat gemaakte beveiligingsoplossingen kunnen bieden die aansluiten bij uw specifieke
                    behoeften.
                </h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <Link key={index} to={`/Diensten/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                              className="service-block" onClick={handleClick}>
                            <div className="service-content">
                                {service.icon}
                                <h2>{service.name}</h2>
                                <p>{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Services;
