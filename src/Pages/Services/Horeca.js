import { useEffect } from "react";
import Footer from "../../Footer";

function HorecaBeveiliging() {
    useEffect(() => {
        document.title = "Diensten | D&S Security";
    });

    return (
        <div>
            <div className="content-container">
                <div className="hero-section-about">
                    <div className="hero-section-horeca"></div>
                    <div className="hero-text-about">
                        <h1>Horeca Beveiliging</h1>
                    </div>
                </div>

                <div className={'dog-service-text'}>
                    <h1>Veilige en Gastvrije Horeca</h1>
                    <p>
                        Bij D&S Security bieden we professionele beveiligingsdiensten voor de horeca om een veilige en gastvrije omgeving voor uw gasten te waarborgen.
                    </p>

                    <h3>Professionele Beveiligingspersoneel</h3>
                    <p>
                        Ons beveiligingspersoneel voor de horeca is goed getraind en heeft ervaring in het omgaan met verschillende situaties die zich kunnen voordoen in een horecaomgeving.
                    </p>
                    <h3>Preventie van Conflicten en Incidenten</h3>
                    <p>
                        We streven ernaar om conflicten en incidenten proactief te voorkomen door middel van preventieve maatregelen en een proactieve benadering van beveiliging.
                    </p>

                    <h2>Waarom Kiezen voor Onze Horeca Beveiligingsdiensten?</h2>
                    <p>
                        <strong>Veiligheid en Gastvrijheid:</strong> We combineren effectieve beveiliging met een gastvrije benadering om ervoor te zorgen dat uw gasten zich veilig en welkom voelen.
                    </p>
                    <p>
                        <strong>Ervaring en Professionaliteit:</strong> Ons team heeft uitgebreide ervaring in het beveiligen van horecagelegenheden en biedt professionele diensten op maat van uw behoeften.
                    </p>
                    <p>
                        <strong>24/7 Ondersteuning:</strong> We staan altijd klaar om ondersteuning te bieden, of het nu gaat om drukke weekendavonden of speciale evenementen.
                    </p>

                    <p>
                        Neem contact met ons op om uw horecabeveiligingsbehoeften te bespreken en ontdek hoe we kunnen helpen bij het creëren van een veilige en gastvrije omgeving voor uw gasten.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default HorecaBeveiliging;
