import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css';
import missionPic from '../imgs/home_mission_pic.png';
import public_1 from '../imgs/1.png';
import public_2 from '../imgs/2.png';
import public_3 from '../imgs/3.png';
import background from '../imgs/home_background_img.png';
function Home(){
    const navigate = useNavigate();
    const navigate_actor= async ()=> {
        navigate('/Actor');
    }
    const navigate_creator = async ()=>{
        navigate('/Creator');
    }
    const navigate_artist = async ()=>{
        navigate('/Artist');
    }
    return(
    <>
    <div className="home-container">
        <div className="home-background">
            <div className="home-presentation">
                <img src={background} alt="background"/>
            </div>
            <div className="home-presentation-text">
                 <h1>Prepare to perform</h1>
                <h2>Studio4: L'Expérience Cast Training Ultime pour Acteurs et Créateurs de contenu</h2>
                <a className="home_info_button" href="#home_public">En savoir plus</a>
            </div>
        </div>
        <span className="bar"></span>
        <div id="home_public">
            <div className="home_public_cont">
                <div className="public_picture">
                    <img src={public_1}/>
                </div>
                <div className="public_text">
                    <h1>Pour les Acteurs</h1>
                    <p>Nous personnalisons votre préparation pour que votre performance soit aussi crédible
                        qu'impactante, répondant parfaitement aux exigences de votre rôle.
                    </p>
                </div>
                <div>
                    <button className="home_mission_button" onClick={navigate_actor}>En savoir plus</button>
                </div>
            </div>
            <div className="home_public_cont">
                <div className="public_picture">
                <img src={public_2}/>
                </div>
                <div className="public_text">
                    <h1>Pour les Créateurs de contenu</h1>
                    <p>Nous vous préparons opur chaque projet vidéo, vous assurant d'être dans les meilleures 
                        conditions pour tous vos tournages.
                    </p>
                </div>
                <div>
                    <button className="home_mission_button" onClick={navigate_creator}>En savoir plus</button>
                </div>
                
            </div>
            <div className="home_public_cont">
                <div className="public_picture">
                    <img src={public_3}/>
                </div>
                <div className="public_text">
                    <h1>Pour les Artistes</h1>
                    <p>Nous boostons votre condition physique pour des performances scéniques intenses, vous
                        permettant de tenir le devant de la scène avec énergie, du début jusqu'à la dernière note. 
                    </p>
                </div>
                <div>
                    <button className="home_mission_button" onClick={navigate_artist}>En savoir plus</button>
                </div>

            </div>
        </div>
        <div id="home_misson">
            <div className="home_mission_text">
                <h1>Studio4: Votre Préparation, Notre Mission</h1>
                <p>Chez Studio4, nous nous engageons à préparer physiquement les acteurs, créateurs de contenu, et artistes pour leurs projets, en visant la réussite dans leurs domaines respectifs. Nous adaptons la préparation physique traditionnelle en y intégrant un accompagnement personnalisé qui couvre non seulement la gestion du stress et de la fatigue, mais aussi la prévention des blessures, parmi d'autres aspects essentiels à votre bien-être et performance. Notre objectif est de vous accompagner à chaque étape de votre parcours, en assurant votre succès à tous les niveaux.  
                </p>
                <button className="home_mission_button">En savoir plus</button>
            </div>
            <div className="home_mission_pic">
                <img src={missionPic} />
            </div>
        </div>
        </div>
    </>
    );
}
export default Home;