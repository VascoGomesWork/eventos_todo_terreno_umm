import React from "react";

export default function Selecionar_Localizacao_Evento(){

    return(

        {/*-- Here Maps --*/},
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-location me-1"></i>
                Selecione a Localização do Evento
            </div>
            <div class="card-body">
                {/* How to use HERE Maps - https://developer.here.com/tutorials/getting-here-credentials/ */}
                <div className="google-map-code">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                        width="600" height="450" frameBorder="0" allowFullScreen=""
                        aria-hidden="false" tabIndex="0"></iframe>

                </div>
            </div>
        </div>
    )
}