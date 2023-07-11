"use client"; // This is a client component 👈🏽

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "../../src/app/styles/mainpage.css"
import imgServicio1 from "../../public/assets/images/imgServicio1.png"
import imgServicio2 from "../../public/assets/images/imgServicio2.png"
import imgServicio3 from "../../public/assets/images/imgServicio3.png"
import { useState } from "react";
import Image from "next/image";
import "../../src/app/globals.css";
import CardService from "@/app/components/CardService";
import bdbLogo from "../../public/assets/logos/BdBLogo.png";
import chronosPayLogo from "../../public/assets/logos/chronosPayLogo.png"
import finguruLogo from "../../public/assets/logos/finguruLogo.png"



const MainPage = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
    return (<>
        
        <Navbar/>
        <section className="layoutHome">
            <h1>Invertí a favor del ambiente</h1>
            <h3>Protegemos árboles de ser talados y conservamos  <br/> territorios nativos</h3>
            <button><a href="#servicios"> Comenzá </a></button>

            <div className="dataBoard">
                <div className="dataContent">
                <p className="dataNumber"><strong>133.150</strong></p>
                <p>hectareas <br/> de bosque</p>
                </div>
                <div className="dataBoardLine"></div>
                <div className="dataContent">
                <p className="dataNumber"><strong>190.214</strong></p>
                <p>estadios <br/> de fútbol</p>
                </div>
                <div className="dataBoardLine"></div>
                <div className="dataContent">
                <p className="dataNumber"><strong>27.548</strong></p>
                <p>tn CO2 <br/> compensadas</p>
                </div>
                
            </div>
        </section>
        
        <section className="servicesHome" id="servicios">
            <div className="servicesText"><h3>SERVICIOS</h3>
            <h1>CONSERVÁ LOS <br/>TERRITORIOS NATIVOS</h1>
            <p>Los bosques nativos son uno de los principales  <br/> productores de oxígeno, son esenciales para nosotros y <br/> todos los seres vivos del planeta. Por esto, debemos <br/>proteger los territorios nativos de ser deforestados.</p></div>
            <div className="servicesContainer" >
            <CardService 
                number= "1."
                image={imgServicio1} 
                title="Medí"
                text="Conocé tu impacto ambiental. Utilizá la calculadora y descubrí tus emisiones de CO2"/>
            <CardService 
                number="2."
                image={imgServicio2} 
                title="Compensá"
                text="Tu compra garantiza la protección del bosque. Salvá a los árboles de ser talados y a la fauna de ser desplazada"/>
            <CardService 
                number="3."
                image={imgServicio3}
                title="Monitoreá"
                text="Visualizá la cantidad de árboles y especies salvadas, y cuánto CO2 absorbió tu inversión en un año."/>
               
            </div>


            
            
        </section>
        <section className="tokensHome">
            <h1> Oxygen Token</h1>
            <div className="tokenContainer">
                <div className="token"></div>
                <div className="token"></div>
                <div className="token"></div>
                <div className="token"></div>

            </div>
            <div className="tokensProgress">
                <div className="progressLine"></div>
                <p> Objetivo final: <br/> 000 hectareas</p>
            </div>
            <div className="line"></div>

        </section>



        <section className="videoPresentacion">
            <div className="videoHome">

            </div>
            <div className="videoText">
                <h3>NUESTRO MANIFIESTO</h3>
                <h1>CONVERTITE EN CARBONO <br/> NEUTRAL, USA OXYGEN</h1>
                <p>Queremos cambiar el esquema de donaciones convencional <br/>y así, poder salvar los bosques nativos. ¡Abrimos el mercado <br/> para una valoración internacional de terrenos de bosque nativo!</p>
            </div>
        </section>

        <section className="alianzasSeccion">
            <h3>ALIANZAS</h3>
            <div className="alianzasContainer">
                <Image className = "alianza" src={bdbLogo} alt = "Banco de Bosques"/>
                <Image className = "alianza" src={chronosPayLogo} alt = "Chronos Pay"/>
                <Image className = "alianza" src={finguruLogo} alt = "Finguro"/>
                
            </div>
        </section>

        <section className="phrase">
            <h2>"La crisis climática esta causada por nosotros y las soluciones deben venir <br/> de nosotros. Tenemos las herramientas:la tecnología está de nuestro <br/> lado"</h2> <p>- Antonio Guterres, Secretario General de la ONU</p>
            <button>Comenzar</button>
        </section>

        <Footer/>
        
        </>
     
    );
  };
  
  export default MainPage;