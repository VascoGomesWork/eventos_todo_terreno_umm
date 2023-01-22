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
                    <iframe src="https://embed.waze.com/iframe?zoom=15&lat=37.100372&lon=-8.268414&ct=livemap"
                            width="600" height="450" allowFullScreen></iframe>

                    <br/>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12717.634883626057!2d-8.297905799999999!3d37.166756649999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2spt!4v1674343609983!5m2!1spt-PT!2spt"
                        width="600" height="450" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                    <br/>

                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1f8BYUCwFk8Ue0fG7c3cZ8Ia7Yiiczow&ehbc=2E312F" width="640" height="480"></iframe>

                </div>
            </div>
        </div>
    )
}