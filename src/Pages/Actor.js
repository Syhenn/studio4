import React from "react";
import ac_serv from '../imgs/actor-service.png';
import ac_met from '../imgs/actor-meth.png';
import ac_app from '../imgs/actor-app.png';
import ac_why from '../imgs/actor-why.png';
import '../styles/Actor.css';
function Actor(){
    return(
        <div className="actor">
            <div className="services">
                <img src={ac_serv} alt="img_sport"/>
                <div>
                    <h1>LE SERVICE ULTIME DE CAST TRAINING POUR ACTEURS</h1>
                    <p>Préparer un rôle va au-delà de l'apprentissage des répliques et de l'immersion dans la psychologie du
                        personnage. La préparation physique est cruciale, non seulement pour incarner physiquement le personnage, 
                        mais aussi pour se prémunir contre les blessures, la fatigue et le stress inhérents aux tournages exigeants.</p>
                </div>
            </div>
            <span className="bar"></span>
            <div className="why">
                <div>
                    <h1>Pourquoi est-ce important d’avoir un cast trainer pour un acteur ?</h1>
                    <p>Pour les acteurs, le véritable enjeu réside dans leur capacité à livrer
                    constamment des performances convaincantes, à résister aux rigueurs des
                    tournages et à maîtriser le stress inhérent au métier. Une préparation physique
                    ciblée est donc essentielle.</p>
                    <p>Selon notre expérience, voici les obstacles souvent rencontrés par les acteurs :</p>
                    <ul>
                        <li>Un entraînement souvent inadapté aux exigences spécifiques de leurs rôles.</li>
                        <li>Une grande fatigue physique augmentant le risque de blessures</li>
                        <li>Gestion du Stress Défaillante</li>
                        <li>Bien-être Négligé : Une tendance à sacrifier leur santé au profit de leur engagement artistique.</li>
                    </ul>

                        
                </div>
                <img src={ac_why} alt="img_sport"/>
            </div>
            <span className="bar"></span>
            <div className="meth">
                <img src={ac_met} alt="img_sport"/>
                <div>
                    <h1>NOTRE MÉTHODE</h1>
                    <p>Chez Studio4, nous connaissons l’importance de la préparation
                    physique dans l'interprétation d'un rôle. Notre processus débute par
                    une évaluation minutieuse des exigences physiques de vos rôles, vous
                    permettant de les incarner pleinement, tout en prévenant les blessures.
                    </p>
                    <p>Nous élaborons ensuite un plan personnalisé qui répond précisément à
                    vos objectifs, au personnages et au calendrier de tournage. Notre but
                    est de vous accompagner à chaque étape de votre préparation,
                    assurant non seulement une amélioration de votre endurance, force, et
                    mobilité, mais aussi la mise en place de stratégies efficaces pour la
                    gestion de la fatigue et des blessures.</p>
                </div>
            </div>
            <span className="bar"></span>
            <div className="app">
                    <div className="app_1">
                        <h1>NOS APPROCHES</h1>
                    </div>
                    <div className="app_2">
                        <h2>Accompagnement sur long terme pour Acteurs</h2>
                        <p>Cet accompagnement est idéalement conçu pour
                            les acteurs cherchant à maintenir une condition
                            physique optimale à travers l'année. Notre objectif
                            est de vous maintenir à un niveau de préparation tel
                            que, dès l'annonce d'un projet, vous puissiez
                            atteindre votre pic de forme physique en seulement
                            un mois. Notre programme garantit que vous serez
                            toujours prêt à exceller, physiquement parlant, pour
                            chaque opportunité qui se présente.
                            </p>
                    </div>
                    <div className="app_3">
                        <h2>Préparation dédiée à un rôle spécifique</h2>
                        <p>Cet accompagnement est destiné aux acteurs se
                        préparant pour des rôles exigeants et spécifiques.
                        Que vous vous apprêtiez à incarner un personnage
                        historique complexe ou à relever les défis physiques
                        d'un rôle d'action, notre suivi intensif et personnalisé
                        répond à chaque détail de votre performance. Ce
                        service comprend des ajustements ciblés avant le
                        début du tournage, un soutien continu pendant la
                        production pour maximiser votre rendu à l'écran, et
                        un suivi après le projet pour une récupération
                        intégrale et une transition douce vers de futurs
                        engagements</p>
                    </div>        
            </div>
        </div>

    )

}   

export default Actor;