import { useEffect } from "react";
import Footer from "../../Footer";

function Zorgbeveiliging() {
    useEffect(() => {
        document.title = "Diensten | D&S Security";
    });

    return (
        <div>
            <div className="content-container">
                <div className="hero-section-about">
                    <div className="hero-section-zorgbeveiliging"></div>
                    <div className="hero-text-about">
                        <h1>Zorgbeveiliging Diensten</h1>
                    </div>
                </div>

                <div className={'dog-service-text'}>
                    <h1>Betrouwbare Beveiliging voor de Zorgsector</h1>
                    <p>
                        Bij D&S Security bieden we gespecialiseerde zorgbeveiliging om de veiligheid en het welzijn van patiënten, personeel en bezoekers in zorginstellingen te waarborgen.
                    </p>

                    <h3>Gevoeligheid voor de Zorgomgeving</h3>
                    <p>
                        Onze zorgbeveiligers begrijpen de unieke behoeften van de zorgsector en zijn getraind om te werken in een gevoelige omgeving met respect voor de privacy en waardigheid van alle betrokkenen.
                    </p>
                    <h3>Veiligheid en Toezicht</h3>
                    <p>
                        We bieden een combinatie van beveiligingsmaatregelen en toezicht om een veilige omgeving te creëren, inclusief toegangscontrole, bewaking van publieke ruimtes en snelle respons op noodsituaties.
                    </p>

                    <h2>Waarom Kiezen voor Onze Zorgbeveiliging Diensten?</h2>
                    <p>
                        <strong>Specialistische Expertise:</strong> Onze zorgbeveiligers hebben specifieke training en expertise om effectief om te gaan met de uitdagingen en vereisten van de zorgsector.
                    </p>
                    <p>
                        <strong>Empathische Benadering:</strong> We hechten waarde aan een empathische benadering en zorgen voor een vriendelijke en ondersteunende aanwezigheid in zorginstellingen.
                    </p>
                    <p>
                        <strong>Continue Bescherming:</strong> Onze zorgbeveiliging biedt continue bescherming en toezicht om een veilige en rustige omgeving te handhaven voor alle betrokkenen.
                    </p>

                    <p>
                        Neem contact met ons op om uw zorgbeveiligingsbehoeften te bespreken en ontdek hoe we kunnen helpen bij het waarborgen van de veiligheid en welzijn van uw zorginstelling met onze professionele diensten.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Zorgbeveiliging;
