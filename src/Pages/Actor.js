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
                    <h1>Pourquoi est-ce important d’avoir
                            un cast trainer pour un acteur ?
                            </h1>
                                                <p>Que ce soit pour affiner sa condition physique pour un film d'action,
                            adapter sa silhouette à un personnage historique, ou renforcer son corps
                            pour éviter les blessures pendant les tournages intenses.
                            </p>
                            <p>Cette préparation minutieuse n'est pas seulement une question
                            d'esthétique ; elle englobe également le développement de l'endurance,
                            de la force et de la flexibilité, éléments essentiels pour les exigences des
                            performances à l'écran.</p>
                            <p>En mettant l'accent sur la prévention des blessures, un personal trainer
                            s'assure que l'acteur puisse maintenir une présence constante, évitant
                            ainsi les interruptions qui pourraient impacter la production. C'est une
                            approche globale, personnalisée pour chaque acteur et chaque rôle, qui
                            garantit une interprétation convaincante et une réalisation de projet sans
                            faille.</p>
                </div>
                <img src={ac_why} alt="img_sport"/>
            </div>
            <span className="bar"></span>
            <div className="meth">
                <img src={ac_met} alt="img_sport"/>
                <div>
                    <h1>NOTHE MÉTHODE</h1>
                    <p>Ce qui distingue Studio4 dans l'univers du cast training, c'est notre
                    approche centrée sur la personne. Nous évaluons minutieusement
                    les besoins uniques de chaque acteur pour adapter notre
                    accompagnement de manière absolue. Chaque élément de nos
                    programmes est taillé sur mesure, garantissant une réponse précise
                    à vos exigences spécifiques. Notre méthodologie évolue en
                    permanence, affinée par l'analyse détaillée des données collectées
                    lors des sessions d'entraînement. Cette approche dynamique assure
                    que nos programmes restent à la pointe de l'efficacité et de la
                    pertinence</p>
                </div>
            </div>
            <span className="bar"></span>
            <div className="app">
                <div>
                    <h1>2 APPROCHES</h1>
                    <ul>
                        <li>L’accompagnement annuel est conçu pour maintenir l'acteur
                            à un niveau optimal de forme physique tout au long de
                            l'année. L'objectif est de garantir une préparation efficace en
                            4 semaines pour tous les rôles et événements à venir. Avec
                            ce forfait annuel, l'acteur bénéficie d'une préparation
                            physique continue, s'assurant qu'il soit toujours prêt à
                            embrasser pleinement les défis de son métier.
                            </li>
                            <li>
                            L’accompagnement pour un projet sert à préparer un acteur
pour un projet spécifique. Lorsqu'un acteur se prépare pour
un rôle spécifique, un suivi intensif et ciblé est mis en place
pour répondre aux demandes précises du personnage. Ce
service inclut des ajustements sur site avant et pendant le
tournage, ainsi qu'un soutien après tournage pour une
récupération complète et une transition en douceur vers de
futurs projets.

                            </li>
                    </ul>
                </div>
                <img src={ac_app} alt="img_sport"/>
            </div>
        </div>

    )

}   

export default Actor;