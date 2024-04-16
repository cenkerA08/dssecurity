import {useEffect} from "react";
import Footer from "../../Footer";

function Chauffeur() {
    useEffect(() => {
        document.title = "Diensten | D&S Security";
    });

    return (
        <div>
            <div className="content-container">
                <div className="hero-section-about">
                    <div className="hero-section-chauffeur"></div>
                    <div className="hero-text-about">
                        <h1>Beveiliging chauffeur</h1>
                    </div>
                </div>

                <div className={'dog-service-text'}>
                    <h1>Veilige en betrouwbare chauffeursdiensten</h1>
                    <p>
                        Bij D&S Security bieden we veilige en betrouwbare chauffeursdiensten voor uw transportbehoeften.
                        Onze professionele chauffeurs zijn getraind en hebben uw veiligheid als hoogste prioriteit.
                    </p>

                    <h3>Professionele Chauffeurs</h3>
                    <p>
                        Onze chauffeurs zijn ervaren professionals die beschikken over uitstekende rijvaardigheden
                        en een grondige kennis van verkeersregels en -voorschriften.
                    </p>
                    <h3>Veilig en Comfortabel Vervoer</h3>
                    <p>
                        Wij zorgen voor veilig en comfortabel vervoer naar uw bestemming, of het nu gaat om
                        zakelijke reizen, evenementen, luchthavenvervoer, of andere transportbehoeften.
                    </p>

                    <h2>Waarom Kiezen voor Onze Chauffeursdiensten?</h2>
                    <p>
                        <strong>Veiligheid Voorop:</strong> We hechten het hoogste belang aan uw veiligheid en
                        zorgen ervoor dat onze chauffeurs voldoen aan alle veiligheidsnormen.
                    </p>
                    <p>
                        <strong>Betrouwbaarheid:</strong> U kunt vertrouwen op onze punctualiteit en betrouwbaarheid
                        om u op tijd op uw bestemming te brengen.
                    </p>
                    <p>
                        <strong>Professionele Service:</strong> Onze chauffeurs bieden een professionele en
                        vriendelijke service, afgestemd op uw specifieke wensen en behoeften.
                    </p>

                    <p>
                        Neem contact met ons op om uw chauffeursdiensten te plannen en te ontdekken hoe wij u kunnen
                        helpen met veilig en comfortabel vervoer naar elke bestemming.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Chauffeur;