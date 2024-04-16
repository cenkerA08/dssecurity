import {useEffect} from "react";
import Footer from "../Footer";
import '../About.css'

function About() {
    useEffect(() => {
        document.title = "Over Ons | D&S Security";
    });

    return (
        <div>
            <div className="content-container">
                <div className="hero-section-about">
                    <div className="hero-background-about"></div>
                    <div className="hero-text-about">
                        <h1>Over Ons</h1>
                    </div>
                </div>

                <div className='MissieSection'>
                    <h2>Onze Missie & Doel</h2>
                    <p>Bij D&S Security is onze missie om hoogwaardige en op maat gemaakte beveiligingsoplossingen
                        te bieden die voldoen aan de unieke behoeften van onze klanten. We streven ernaar om een
                        gevoel van totale gemoedsrust te bieden door betrouwbare beveiligingsdiensten aan te bieden
                        die altijd en overal bescherming bieden.</p>
                    <p>Ons doel is om een vertrouwde partner te zijn voor onze klanten, waarbij we nauw met hen
                        samenwerken om hun beveiligingsdoelstellingen te begrijpen en te realiseren. Door
                        voortdurende innovatie en toewijding aan excellentie streven we ernaar om de normen in de
                        beveiligingsindustrie te verhogen en een veiligere omgeving voor iedereen te creëren.</p>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default About;