import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeroAbout from '../../components/HeroAbout';

const About = () => {
    return (
        <>
            <Header />
            <HeroAbout />
            <div className="about">
                <ul>
                    <li>
                        <input type="checkbox" />
                        <i></i>
                        <h2>Fiabilité</h2>
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <i></i>
                        <h2>Respect</h2>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <i></i>
                        <h2>Service</h2>
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <i></i>
                        <h2>Sécurité</h2>
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default About;