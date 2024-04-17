import {React, useEffect} from "react";
import ac_serv from '../imgs/actor-service.png';
import ac_met from '../imgs/createur_3.png';
import ac_why from '../imgs/createur_2.png';
import '../styles/Creator.css';
function Creator(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className="creator">
            <div className="services">
                <img src={ac_serv} alt="img_sport"/>
                <div>
                    <h1>TRANSFORMER VOTRE CONTENU À L'AIDE D'UN CAST TRAINER</h1>
                    <p>Créer du contenu impactant exige plus que de bonnes idées. Pour les
                        créateurs, être dynamique et engageant à l'écran, gérer les marathons de
                        tournage et conserver sa créativité sous pression représentent des défis
                        quotidiens. Une préparation physique devient essentielle, afin de projeter
                        la meilleure image de soi, mais aussi pour résister aux exigences physiques
                        et mentales de la création de contenu.
                        </p>
                </div>
            </div>
            <span className="bar"></span>
            <div className="why">
                <div>
                    <h1>L'IMPACT D'UN CAST TRAINER SUR LA CRÉATION DE CONTENU : UN ATOUT INDISPENSABLE</h1>
                    <p>La création de contenu exige bien plus qu'une idée brillante ou de vidéo en 4K.
                    Pour les créateurs, le vrai challenge est de garder une énergie vibrante et une
                    authenticité face à la caméra, tout en gérant la fatigue et la pression de la
                    créativité continue. Une préparation physique adaptée devient alors cruciale.
                    </p>
                    <p>À partir de notre expérience, les défis fréquemment rencontrés par les créateurs incluent :</p>
                    <ul>
                        <li>La négligence d'une préparation physique qui répond à leurs exigences uniques.</li>
                        <li>La sous-estimation de l'impact de la fatigue sur la créativité.</li>
                        <li>L'absence de stratégies efficaces pour gérer le stress.</li>
                        <li>Le manque d'un programme d'entraînement sur mesure pour booster la présence à l'écran et l'endurance.</li>
                        <li>Et la plus importante, la tendance à s'oublier.</li>
                    </ul>

                        
                </div>
                <img src={ac_why} alt="img_sport"/>
            </div>
            <div className="meth">
                <img src={ac_met} alt="img_sport"/>
                <div>
                    <h1>NOTRE MÉTHODE</h1>
                    <p>La force de Studio4 réside dans notre compréhension approfondie des
                    défis uniques auxquels sont confrontés les créateurs de contenu. Nous
                    prenons en compte chaque aspect de votre vie pour adopter une
                    approche personnalisée, en analysant vos besoins spécifiques afin
                    d'élaborer des programmes d'entraînement sur mesure. Notre
                    méthodologie, en constante évolution grâce à un suivi rigoureux et une
                    analyse précise de vos progrès, garantit des améliorations tangibles et
                    mesurables dans votre création de contenu. Notre mission est
                    d'accompagner chaque créateur de contenu dans la réussite de leur
                    projet.
                    </p>
                </div>
            </div>
            <div className="app">
                    <div className="app_1">
                        <h1>NOS APPROCHES</h1>
                    </div>
                    <div className="app_2">
                        <h2>L’accompagnement sur long terme :</h2>
                        <p>Conçu pour vous maintenir à un niveau
                            optimal de forme physique tout au long de
                            l'année. L'objectif est de vous amener à un
                            certain niveau de forme physique et de vous
                            maintenir à seulement quatre semaines de votre
                            condition optimale. Ainsi, que vous ayez un
                            projet vidéo majeur ou une apparition lors d'un
                            événement, vous serez assuré d'être au sommet
                            de votre forme en seulement quatre semaines.
                            </p>
                    </div>
                    <div className="app_3">
                        <h2>L'accompagnement pour un projet spécifique :</h2>
                        <p>Conçu pour préparer les créateurs de contenu à
                        relever leurs défis uniques. Que vous réalisiez une
                        vidéo de survie ou tout autre concept ambitieux,
                        nous proposons un suivi intensif et personnalisé
                        pour répondre aux exigences spécifiques de votre
                        contenu. Ce service inclut des ajustements
                        personnalisés avant et pendant la production, ainsi
                        qu'un soutien post-projet pour garantir une
                        récupération optimale et vous préparer
                        efficacement pour vos futures aventures créatives.</p>
                    </div>        
            </div>
        </div>

    )

}   

export default Creator;