import React from "react";
import { ServicesInfo } from "../components/ServicesInfo";



export const Services = () => {
    return(
        <section id='servicios'>
            <div className="div-services">
                <h1>Servicios</h1>
                <h3 className="title-service">Todas estas opciones son ilustrativas, podemos armar muchas mas cosas o modificar existentes</h3>
                <ServicesInfo/>
            </div>
        </section>
   
    );
}