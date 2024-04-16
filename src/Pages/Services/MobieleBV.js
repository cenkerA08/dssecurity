import { useEffect } from "react";
import Footer from "../../Footer";

function MobileSurveillance() {
    useEffect(() => {
        document.title = "Diensten | D&S Security";
    });

    return (
        <div>
            <div className="content-container">
                <div className="hero-section-about">
                    <div className="hero-section-mobile-surveillance"></div>
                    <div className="hero-text-about">
                        <h1>Mobiele Surveillance Diensten</h1>
                    </div>
                </div>

                <div className={'dog-service-text'}>
                    <h1>Efficiënte Mobiele Surveillance Oplossingen</h1>
                    <p>
                        Bij D&S Security bieden we uitgebreide mobiele surveillance diensten om de veiligheid en beveiliging van uw eigendommen te waarborgen.
                    </p>

                    <h3>Flexibele Monitoring</h3>
                    <p>
                        Onze mobiele surveillance units bieden flexibele monitoringopties die zijn afgestemd op uw specifieke behoeften, of het nu gaat om bouwplaatsen, evenementen of leegstaande panden.
                    </p>
                    <h3>Snelle Respons</h3>
                    <p>
                        Met onze mobiele surveillance teams zorgen we voor een snelle respons op eventuele beveiligingsdreigingen of incidenten, waardoor potentiële risico's voor uw eigendommen worden geminimaliseerd.
                    </p>

                    <h2>Waarom Kiezen voor Onze Mobiele Surveillance Diensten?</h2>
                    <p>
                        <strong>24/7 Bescherming:</strong> Onze mobiele surveillance units opereren rond de klok en bieden continue bescherming en gemoedsrust.
                    </p>
                    <p>
                        <strong>Kosteneffectief:</strong> Onze mobiele surveillance oplossingen bieden kosteneffectieve beveiliging in vergelijking met traditionele statische bewakers, waardoor u geld bespaart zonder in te boeten op veiligheid.
                    </p>
                    <p>
                        <strong>Geavanceerde Technologie:</strong> We maken gebruik van geavanceerde surveillancetechnologie om nauwkeurige monitoring en efficiënte respons op beveiligingsincidenten te garanderen.
                    </p>

                    <p>
                        Neem contact met ons op om uw behoeften op het gebied van mobiele surveillance te bespreken en ontdek hoe we kunnen helpen de beveiliging van uw eigendommen te verbeteren met onze efficiënte en betrouwbare oplossingen.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default MobileSurveillance;
