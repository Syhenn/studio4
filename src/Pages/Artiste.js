import {React, useEffect} from "react";
import ac_serv from '../imgs/chant_1.png';
import ac_met from '../imgs/chant_3.png';
import ac_app from '../imgs/actor-app.png';
import ac_why from '../imgs/chant_2.png';
import ar_artist from '../imgs/artist.png';
import '../styles/Artist.css';
import { useNavigate } from 'react-router-dom';
function Artist(){
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        footer.scrollIntoView({ behavior: "smooth" });
    }
    return(
        <div className="artist">
            <div className="services">
                <img src={ac_serv} alt="img_sport"/>
                <div>
                    <h1>ÉLEVEZ VOTRE PERFORMANCES SCÉNIQUE AVEC L'AIDE D'UN CAST TRAINER</h1>
                    <p>Atteindre des sommets dans le monde de la musique nécessite bien plus
                        qu'un talent vocal exceptionnel. Pour les artistes, maintenir une énergie
                        captivante sur scène, gérer les longues sessions de répétitions et
                        conserver une présence scénique sous le feu des projecteurs sont des
                        défis constants. Une préparation physique ciblée devient cruciale pour
                        non seulement améliorer votre endurance et votre présence, mais aussi
                        pour répondre aux exigences physiques et mentales des performances
                        live.
                        </p>
                </div>
            </div>
            <span className="bar"></span>
            <div className="why">
                <div>
                    <h1>LE RÔLE CLÉ D'UN CAST TRAINER POUR LES ARTISTES</h1>
                    <p>Pour les artistes, le défi majeur réside dans l'aptitude à maintenir une
                        présence scénique, à endurer des répétitions prolongées et à gérer le stress
                        des performances en direct. C'est ici qu'une préparation physique spécifique
                        devient indispensable.
                    </p>
                    <p>Selon notre expérience, voici les obstacles souvent rencontrés par les artistes :</p>
                    <ul>
                        <li>Une attention insuffisante portée à une préparation physique alignée sur leurs besoins uniques.</li>
                        <li>Une sous-estimation de l'impact de la fatigue physique sur l'expression artistique et l'endurance scénique.</li>
                        <li>Un manque de méthodes efficaces pour gérer le stress et l'anxiété liés aux performances publiques.</li>
                        <li>L'absence d'un programme d'entraînement personnalisé destiné à améliorer l'endurance et la présence sur scène</li>
                        <li>Et le plus critique, la tendance à négliger leur bien-être.</li>
                    </ul>
                </div>
                <img src={ac_why} alt="img_sport"/>
            </div>
            <div className="meth">
                <img src={ac_met} alt="img_sport"/>
                <div>
                    <h1>NOTRE MÉTHODE</h1>
                    <p>Chez Studio4, nous savons que chaque concert ou tournée impose des
                        exigences physiques uniques à l'artiste. C'est pourquoi notre approche
                        commence par une analyse conjointe des critères physiques essentiels à
                        votre performance scénique. Ensemble, nous identifions les capacités à
                        développer pour assurer une présence inoubliable devant votre public.
                    </p>
                    <p>
                        Ensuite, nous concevons un accompagnement sur mesure,
                        parfaitement adapté à vos besoins spécifiques, que ce soit pour un
                        concert ou une tournée. Notre objectif est de vous soutenir pleinement
                        dans votre parcours, en veillant à ce que vous disposiez de l'endurance,
                        de la force et de la vitalité nécessaires pour captiver à chaque
                        apparition.
                    </p>
                </div>
            </div>
            <div className="app">
                    <div className="app_1">
                        <h1>NOS APPROCHES</h1>
                    </div>
                    <div className="app_2">
                        <h2>Accompagnement sur long terme pour Artistes</h2>
                        <p>Cet accompagnement est spécialement conçu pour
                            les artistes désireux de préserver une forme physique
                            optimales tout au long de l'année. L'objectif est de
                            vous élever à un niveau de performance exceptionnel
                            et de vous maintenir à quatre semaines de votre pic
                            de condition physique. Que vous prépariez une
                            tournée ou des performances live importantes, vous
                            serez à votre apogée en un mois de préparation.
                            </p>
                    </div>
                    <div className="app_3">
                        <h2>Préparation dédiée à un projet spécifique</h2>
                        <p>Cet accompagnement s'adresse aux artistes s'apprêtant
                            à affronter des défis précis : un concert majeur, une
                            tournée intensive. Nous offrons un suivi intensif et sur
                            mesure, adapté aux besoins uniques de votre présence
                            scénique. Cela inclut des ajustements personnalisés en
                            préparation à l'événement, un soutien durant
                            l'événement pour optimiser votre performance et un
                            accompagnement post-événement pour assurer une
                            récupération complète.
                            </p>
                    </div>        
            </div>
            <div className="offer">
            <img src={ar_artist} alt="img_sport"/>
                <div>
                    <h1>OFFRE SPÉCIALE SÉMINAIRE : COACHING DE COHÉSION ET CRÉATIVITÉ POUR ARTISTES</h1>
                    <p>Lors de la création d'un album, s'entourer de la bonne équipe et
                        trouver l'inspiration dans un environnement propice à la
                        créativité est essentiel. Studio4 introduit une offre unique
                        conçue spécifiquement pour les séminaires d'enregistrement :
                        un coaching physique sur mesure qui renforce la cohésion de
                        groupe et stimule la créativité.
                    </p>
                    <button className="artist_info_button" onClick={scrollToFooter}>En savoir plus</button>
                </div>
            </div>
        </div>

    )

}   

export default Artist;