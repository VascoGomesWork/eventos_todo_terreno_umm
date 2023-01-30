import React, {useState} from "react";


export default function Comentarios_Evento(props){

    const [comentario, setComentario] = useState("")
    console.log("COmentarios Props = " + JSON.stringify(props.comentariosEvento))
    global.comentario = comentario

    return(
        <div>
            {/*-- Comments section--*/}
            <section class="mb-5" id="forum_mensagens">
                <div class="card bg-light">
                    <div class="card-header">
                        <i class="fas fa-comment me-1"></i>
                        Comentários do Evento
                    </div>
                    <div class="card-body">
                        <div className="d-flex mb-4">
                            {[props.comentariosEvento].map((comentario) => (
                                <div>
                                    <div className="flex-shrink-0">
                                        <img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..."/>
                                        <div className="ms-3">
                                            <p>{comentario}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/*-- Comment form--*/}
                        <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Faça um Comentário Acerca do Evento" onChange={(e) => setComentario(e.target.value)}></textarea></form>
                    </div>
                </div>
            </section>

        </div>
    )
}