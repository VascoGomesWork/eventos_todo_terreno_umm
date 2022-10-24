import React from "react";

export default function Comentarios_Evento(){
    return(
        {/*-- Comments section--*/},
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-comment me-1"></i>
                Faça uma Breve Descrição do Evento
            </div>
            <div class="card-body">
                <section class="mb-5" id="forum_mensagens">
                    <div class="card bg-light">
                        <div class="card-body">
                            {/*-- Comment form--*/}
                            <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Descrição do Evento"></textarea></form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}