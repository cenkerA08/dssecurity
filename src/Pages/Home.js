import { useEffect } from "react";
import '../App.css';
import '../Home.css'
import Footer from "../Footer";


function Home() {
    useEffect(() => {
        document.title = "Home | D&S Security";
    });

    const navigateTo = (path) => {
        window.location.href = path;
    };

    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1>D&S SECURITY: Uw Partner in Veiligheid en Bescherming</h1>
                    <p className="hero-description">D&S Security staat garant voor uitgebreide fysieke beveiliging.
                        Onze oplossingen zijn afgestemd op uw behoeften, voor totale gemoedsrust.
                        Vertrouw op ons voor betrouwbare beveiliging, altijd en overal.</p>
                    <div className="button-container">
                        <button className="button services-button" onClick={() => navigateTo("/OverOns")}>Bekijk Over Ons</button>
                        <button className="button contact-button" onClick={() => navigateTo("/Diensten")}>Bekijk onze diensten</button>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="section-content">
                    <h2>Over Ons</h2>
                    <p>Bij D&S Security geloven we in maatwerk als het gaat om uw veiligheid. Met onze oplossingen kunt
                        u
                        gerust zijn, wetende dat uw eigendommen en mensen in goede handen zijn. Ons team van
                        professionals
                        staat altijd paraat om snel en efficiënt te reageren op elke situatie. Neem vandaag nog contact
                        met
                        ons op en ontdek hoe wij uw partner kunnen zijn in veiligheid en bescherming.</p>
                    <button className="button" onClick={() => navigateTo("/Contact")}>Neem Contact Op</button>
                </div>
            </section>

            <section className="featured-services-section">
                <h2>Uitgelichte Diensten</h2>
                <div className="featured-service">
                    <img src="../Images/Security-Guard.jpg" alt="Service 1"/>
                    <div className="service-info">
                        <h3>Dienst 1</h3>
                        <p>Beschrijving van dienst 1</p>
                    </div>
                </div>
                <div className="featured-service">
                    <img src="./Images/service2.jpg" alt="Service 2"/>
                    <div className="service-info">
                        <h3>Dienst 2</h3>
                        <p>Beschrijving van dienst 2</p>
                    </div>
                </div>
            </section>

            <section className="quote-section">
                <div className="quote-content">
                    <h2>Vraag een Offerte Aan</h2>
                    <button className="button" onClick={() => navigateTo("/Offerte")}>Offerte Aanvragen</button>
                </div>
            </section>


            <Footer/>
        </div>
    );
}

export default Home;
