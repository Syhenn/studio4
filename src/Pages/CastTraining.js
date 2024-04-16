import {React, useEffect} from "react";
import ct_1 from '../imgs/castTrain_1.png';
import ct_2 from '../imgs/castTrain_2.png';
import ac_met from '../imgs/actor-meth.png';
import ac_app from '../imgs/actor-app.png';
import logo_barbie from '../imgs/barbie_.png';
import ac_why from '../imgs/actor-why.png';
import ar_artist from '../imgs/artist.png';
import '../styles/CastTraining.css';
function CastTraining(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className="castTraining">
            <div className="services">
                <img src={ct_1} alt="img_sport"/>
                <div>
                    <h1>PRÉPARER VOTRE CASTING POUR UN FILM RÉUSSI</h1>
                    <p>Chez Studio4, notre objectif est de transformer non seulement les
                        acteurs mais aussi les équipes. Nous croyons fermement que la
                        préparation physique collective d’un casting peut grandement
                        contribuer à l’harmonie et à la dynamique de groupe sur le
                        plateau. En entraînant vos acteurs ensemble, nous favorisons non
                        seulement leur préparation pour leurs rôles respectifs, mais aussi
                        la cohésion et l’esprit d’équipe qui sont essentiels pour un
                        tournage réussi.</p>
                </div>
            </div>
            <span className="bar"></span>
            <div className="why">
                <div>
                    <h1>NOTRE MISSION</h1>
                    <p>Chez Studio4, notre mission va au-delà du simple coaching physique.
                        Nous nous engageons à créer des environnements de travail où chaque
                        acteur se sent pleinement préparé, non seulement pour affronter les
                        exigences physiques de son rôle mais aussi pour contribuer à une
                        dynamique de groupe positive et productive. Nous nous concentrons sur
                        la collaboration et le bien-être pour enrichir la cohésion de l'équipe et
                        optimiser la performance globale de la production, garantissant que
                        chaque projet déploie tout son potentiel créatif.
                    </p>
                </div>
                <img src={ac_why} alt="img_sport"/>
            </div>
            <div className="meth">
                
            <img src={ac_met} alt="img_sport"/>
                <div>
                    <h1>POURQUOI C'EST ESSENTIEL?</h1>
                    <p>La préparation physique en groupe pour un casting complet offre de multiples avantages :</p>
                    <ul>
                        <li>Cohésion de Groupe : Des sessions de training communes
                        renforcent les liens, améliorent la communication et créent un
                        environnement de travail plus collaboratif et plaisant.</li>
                        <li>Adaptation aux Rôles : Chaque acteur reçoit une préparation
                        spécifique qui l’aide à incarner physiquement son personnage,
                        augmentant ainsi l’authenticité et l’impact de leur performance.</li>
                        <li>Gestion de l’Énergie et du Stress : Nos programmes aident les
                        acteurs à gérer le stress physique et émotionnel des tournages longs
                        et exigeants, les maintenant en forme et concentrés tout au long de
                        la production.</li>
                    </ul>
                </div>
            </div>
            <div className="why">
                <div>
                    <h1>L'Exemple du film <h1 className="barbie_title">"Barbie"</h1></h1>
                    <p>Prenons l'exemple du film "Barbie"
                        , où les acteurs incarnant
                        les personnages de Ken ont participé à des entraînements
                        conjoints. Ces sessions n'étaient pas seulement des
                        opportunités pour se mettre en forme, mais aussi des
                        moments pour construire une dynamique de groupe qui
                        reflète l'esprit du film. Les défis physiques et les
                        compétitions amicales entre eux ont enrichi leur chimie à
                        l'écran et ont ajouté une couche supplémentaire de réalisme
                        et d'engagement dans leurs performances.
                    </p>
                </div>
                <img src={logo_barbie} alt="img_sport"/>
            </div>
            <div className="meth">
            <img src={ct_2} alt="img_sport"/>
                <div>
                    <h1>Comment nous pouvons aider votre projet</h1>
                    <p>Studio4 est prêt à collaborer avec vous pour concevoir un
                        programme de préparation physique qui s'intègre parfaitement
                        dans le calendrier et les objectifs de votre production. Nous
                        proposons :</p>
                    <ul>
                        <li>Des sessions de groupe personnalisées qui renforcent la
                            camaraderie et l'esprit d'équipe.</li>
                        <li>Des entraînements spécifiques pour chaque acteur, en
                            fonction des exigences physiques de leur rôle.</li>
                        <li>Des stratégies de gestion du stress et de la fatigue pour
                            optimiser les performances durant les périodes de tournage
                            intenses.</li>
                    </ul>
                </div>
            </div>
        </div>

    )

}   

export default CastTraining;