import { useEffect } from "react";
import Footer from "../../Footer";

function Evenement() {
    useEffect(() => {
        document.title = "Diensten | D&S Security";
    });

    return (
        <div>
            <div className="content-container">
                <div className="hero-section-about">
                    <div className="hero-section-evenement"></div>
                    <div className="hero-text-about">
                        <h1>Evenement Beveiliging</h1>
                    </div>
                </div>

                <div className={'dog-service-text'}>
                    <h1>Veilige en betrouwbare evenementenbeveiliging</h1> {/* Aangepast */}
                    <p>
                        Bij D&S Security bieden we veilige en betrouwbare evenementenbeveiliging voor uw evenementen.
                        Onze professionele beveiligers zijn getraind en hebben uw veiligheid als hoogste prioriteit.
                    </p>

                    <h3>Professionele Beveiligers</h3> {/* Aangepast */}
                    <p>
                        Onze beveiligers zijn ervaren professionals die beschikken over uitstekende vaardigheden
                        en een grondige kennis van veiligheidsprocedures en -voorschriften.
                    </p>
                    <h3>Veiligheid en Comfort</h3> {/* Aangepast */}
                    <p>
                        Wij zorgen voor veiligheid en comfort tijdens uw evenement, met uitgebreide ervaring in het
                        beveiligen van diverse soorten evenementen.
                    </p>

                    <h2>Waarom Kiezen voor Onze Evenementenbeveiliging?</h2> {/* Aangepast */}
                    <p>
                        <strong>Veiligheid Voorop:</strong> We hechten het hoogste belang aan de veiligheid van uw
                        evenement en zorgen ervoor dat onze beveiligers voldoen aan alle veiligheidsnormen.
                    </p>
                    <p>
                        <strong>Betrouwbaarheid:</strong> U kunt vertrouwen op onze punctualiteit en betrouwbaarheid
                        om uw evenement veilig en succesvol te laten verlopen.
                    </p>
                    <p>
                        <strong>Professionele Service:</strong> Onze beveiligers bieden een professionele en
                        vriendelijke service, afgestemd op uw specifieke evenementbehoeften.
                    </p>

                    <p>
                        Neem contact met ons op om uw evenementenbeveiliging te plannen en te ontdekken hoe wij u kunnen
                        helpen met een veilig en succesvol evenement.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Evenement;
