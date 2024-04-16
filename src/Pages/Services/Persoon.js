import { useEffect } from "react";
import Footer from "../../Footer";

function Persoonsbeveiliging() {
    useEffect(() => {
        document.title = "Diensten | D&S Security";
    });

    return (
        <div>
            <div className="content-container">
                <div className="hero-section-about">
                    <div className="hero-section-persoonsbeveiliging"></div>
                    <div className="hero-text-about">
                        <h1>Persoonsbeveiliging Diensten</h1>
                    </div>
                </div>

                <div className={'dog-service-text'}>
                    <h1>Betrouwbare Persoonsbeveiliging voor Uw Veiligheid</h1>
                    <p>
                        Bij D&S Security bieden we professionele persoonsbeveiliging om ervoor te zorgen dat u, uw familieleden of belangrijke personen in uw organisatie veilig en beschermd blijven.
                    </p>

                    <h3>Individuele Aanpak</h3>
                    <p>
                        Onze persoonsbeveiligingsdiensten worden aangepast aan de specifieke behoeften van onze klanten, waarbij we rekening houden met hun dagelijkse activiteiten, routines en potentiële bedreigingen.
                    </p>
                    <h3>Deskundige Beveiligers</h3>
                    <p>
                        Onze beveiligers zijn hoogopgeleid, ervaren en discreet, en ze zijn uitgerust om snel en effectief te reageren op elke dreiging of noodsituatie.
                    </p>

                    <h2>Waarom Kiezen voor Onze Persoonsbeveiliging Diensten?</h2>
                    <p>
                        <strong>Discretie en Professionaliteit:</strong> We waarborgen uw privacy en veiligheid met onze discrete en professionele aanpak van persoonsbeveiliging.
                    </p>
                    <p>
                        <strong>Continue Bescherming:</strong> Onze beveiligers bieden 24/7 bescherming en begeleiding, waarbij ze alert blijven op mogelijke risico's en bedreigingen.
                    </p>
                    <p>
                        <strong>Maatwerk Oplossingen:</strong> We bieden op maat gemaakte beveiligingsoplossingen die voldoen aan uw unieke behoeften en omstandigheden.
                    </p>

                    <p>
                        Neem contact met ons op om uw persoonsbeveiligingsbehoeften te bespreken en ontdek hoe we kunnen helpen bij het waarborgen van uw veiligheid en gemoedsrust met onze professionele diensten.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Persoonsbeveiliging;
