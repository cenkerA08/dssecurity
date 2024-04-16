import React, {useState, useEffect} from "react";
import {CiLocationOn} from "react-icons/ci";
import {FiPhone} from "react-icons/fi";
import {FaBuilding} from "react-icons/fa6";
import Footer from "../Footer";

function Contact() {
    useEffect(() => {
        document.title = "Contact | D&S Security";
    }, []);

    const [formData, setFormData] = useState({
        naam: "",
        email: "",
        telefoonnummer: "",
        vraag: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await fetch("https://public.herotofu.com/v1/5d776d00-f8de-11ee-bf9d-5f9a26e8739d", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage("Form submitted successfully!");
                setFormData({
                    naam: "",
                    email: "",
                    telefoonnummer: "",
                    vraag: "",
                });
            } else {
                setErrorMessage("Failed to submit form data. Please try again later.");
            }
        } catch (error) {
            setErrorMessage("Error submitting form data. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <div>
            <div className="content-container">
                <div className="company-contact-container">
                    <div className="company-addres">
                        <div className="icon-container">
                            <CiLocationOn color="red" fontSize="3em"/>
                        </div>
                        <div className="text-container">
                            <h2>Adres Gegevens</h2>
                            <p>blahh blahh blahh</p>
                            <p>blahh blahh blahh</p>
                        </div>
                    </div>
                    <div className="company-contact">
                        <div className="icon-container">
                            <FiPhone color="red" fontSize="3em"/>
                        </div>
                        <div className="text-container">
                            <h2>Contact Gegevens</h2>
                            <p>blahh blahh blahh</p>
                            <p>blahh blahh blahh</p>
                        </div>
                    </div>
                    <div className="company-info">
                        <div className="icon-container">
                            <FaBuilding color="red" fontSize="3em"/>
                        </div>
                        <div className="text-container">
                            <h2>Bedrijf Gegevens</h2>
                            <p>blahh blahh blahh</p>
                            <p>blahh blahh blahh</p>
                        </div>
                    </div>
                </div>

                <div className="contact-container">
                    <div className="contact-text-container">
                        <h1>Neem contact met ons op</h1>
                        <p>Heeft u vragen over onze diensten of heeft u een andere vraag? vul het formulier in en wij
                            zullen zo spoedig mogelijk met u contact opnemen</p>
                    </div>

                    <form className="contact-input-container" onSubmit={handleSubmit}>
                        <input
                            className="contact-input"
                            placeholder="Naam"
                            type="text"
                            name="naam"
                            value={formData.naam}
                            onChange={handleChange}
                            required
                        />


                        <input
                            className="contact-input"
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="contact-input"
                            placeholder="Telefoon nummer"
                            type="tel"
                            name="telefoonnummer"
                            value={formData.telefoonnummer}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            className="textarea contact-input"
                            placeholder="Uw vraag/opmerking"
                            name="vraag"
                            value={formData.vraag}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button className="contact-submit" type="submit">Versturen</button>
                        {successMessage && <div className="success-message">{successMessage}</div>}
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div></div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;
